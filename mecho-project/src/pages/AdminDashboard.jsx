import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { 
  FaEye, 
  FaUser, 
  FaMapMarkerAlt, 
  FaCar, 
  FaChartBar, 
  FaTimes,
  FaCheck,
  FaHourglass
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchAllData = async () => {
    try {
      const [usersData, bookingsData] = await Promise.all([
        fetchUsers(),
        fetchBookings()
      ]);
      setUsers(usersData);
      setBookings(bookingsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const fetchBookings = async () => {
    const q = query(collection(db, 'bookings'), orderBy('bookingDate', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const getUserBookings = (userId) => {
    return bookings.filter(booking => booking.userId === userId);
  };

  const calculateWashStats = (userBookings) => {
    const totalWashes = userBookings.reduce((sum, booking) => sum + (booking.totalDates || 0), 0);
    const completedWashes = userBookings.reduce((sum, booking) => {
      return sum + (booking.selectedDates?.filter(date => date.completed).length || 0);
    }, 0);
    return { totalWashes, completedWashes, remaining: totalWashes - completedWashes };
  };

  const toggleWashCompletion = async (bookingId, washIndex, completed) => {
    try {
      const booking = bookings.find(b => b.id === bookingId);
      const updatedDates = [...booking.selectedDates];
      updatedDates[washIndex] = { ...updatedDates[washIndex], completed };
      
      await updateDoc(doc(db, 'bookings', bookingId), {
        selectedDates: updatedDates
      });
      
      // Update local state
      setBookings(prev => prev.map(b => 
        b.id === bookingId 
          ? { ...b, selectedDates: updatedDates }
          : b
      ));
    } catch (error) {
      console.error('Error updating wash status:', error);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Loading Admin Dashboard...</h1>
      </div>
    );
  }

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ 
      padding: isMobile ? '1rem' : '2rem', 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ 
            color: '#FF6A00', 
            fontSize: isMobile ? '1.8rem' : '2.5rem', 
            marginBottom: '0.5rem',
            lineHeight: '1.2'
          }}>MECHO Admin Dashboard</h1>
          <p style={{ 
            color: '#666', 
            fontSize: isMobile ? '1rem' : '1.1rem'
          }}>Real-time User & Booking Management</p>
          <p style={{ 
            color: '#999', 
            fontSize: isMobile ? '0.8rem' : '0.9rem'
          }}>Last Updated: {new Date().toLocaleString()}</p>
        </header>

        {/* Users Overview */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '3px solid #FF6A00', 
            paddingBottom: '0.5rem', 
            marginBottom: '1.5rem',
            fontSize: isMobile ? '1.3rem' : '1.5rem'
          }}>
            Users Overview ({users.length} Total)
          </h2>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            {isMobile ? (
              <div>
                {users.map((user, index) => {
                  const userBookings = getUserBookings(user.id);
                  const washStats = calculateWashStats(userBookings);
                  const isSubscriber = userBookings.length > 0;
                  
                  return (
                    <div key={user.id} style={{
                      padding: '1rem',
                      borderBottom: '1px solid #eee',
                      backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#FF6A00', cursor: 'pointer' }} onClick={() => { setSelectedUser(user); setShowUserModal(true); }}>
                          {user.name}
                        </div>
                        <button
                          onClick={() => { setSelectedUser(user); setShowUserModal(true); }}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            color: '#FF6A00',
                            padding: '0.25rem',
                            transition: 'all 0.3s ease'
                          }}
                          title="View Details"
                          onMouseEnter={(e) => {
                            e.target.style.color = '#e55a00';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = '#FF6A00';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          <FaEye />
                        </button>
                      </div>
                      <div style={{ color: '#666', marginBottom: '0.5rem', fontSize: '0.9rem', wordBreak: 'break-all' }}>{user.email}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '20px', 
                          fontSize: '0.7rem',
                          backgroundColor: isSubscriber ? '#10B981' : '#6B7280',
                          color: 'white'
                        }}>
                          {isSubscriber ? 'Subscriber' : 'Regular User'}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#666' }}>
                          Joined: {new Date(user.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Bookings: {userBookings.length}</span>
                        <span style={{ fontSize: '0.8rem' }}>
                          {washStats.remaining > 0 ? (
                            <span style={{ color: '#10B981', fontWeight: '600' }}>
                              {washStats.remaining} washes left
                            </span>
                          ) : washStats.totalWashes > 0 ? (
                            <span style={{ color: '#EF4444', fontWeight: '600' }}>Completed</span>
                          ) : (
                            <span style={{ color: '#6B7280' }}>No bookings</span>
                          )}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#FF6A00', color: 'white' }}>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Email</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Role</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Joined</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Bookings</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    const userBookings = getUserBookings(user.id);
                    const washStats = calculateWashStats(userBookings);
                    const isSubscriber = userBookings.length > 0;
                    
                    return (
                      <tr key={user.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white', borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', cursor: 'pointer' }} onClick={() => { setSelectedUser(user); setShowUserModal(true); }}>
                          <span style={{ color: '#FF6A00', textDecoration: 'underline' }}>{user.name}</span>
                        </td>
                        <td style={{ padding: '1rem', color: '#666' }}>{user.email}</td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <span style={{ 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '20px', 
                            fontSize: '0.8rem',
                            backgroundColor: isSubscriber ? '#10B981' : '#6B7280',
                            color: 'white'
                          }}>
                            {isSubscriber ? 'Subscriber' : 'Regular User'}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '600' }}>
                          {userBookings.length}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          {washStats.remaining > 0 ? (
                            <span style={{ color: '#10B981', fontWeight: '600' }}>
                              {washStats.remaining} washes left
                            </span>
                          ) : washStats.totalWashes > 0 ? (
                            <span style={{ color: '#EF4444', fontWeight: '600' }}>Completed</span>
                          ) : (
                            <span style={{ color: '#6B7280' }}>No bookings</span>
                          )}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <button
                            onClick={() => { setSelectedUser(user); setShowUserModal(true); }}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '1.2rem',
                              color: '#FF6A00',
                              padding: '0.5rem',
                              transition: 'all 0.3s ease'
                            }}
                            title="View Details"
                            onMouseEnter={(e) => {
                              e.target.style.color = '#e55a00';
                              e.target.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = '#FF6A00';
                              e.target.style.transform = 'scale(1)';
                            }}
                          >
                            <FaEye />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </section>

        {/* Bookings Overview */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '3px solid #FF6A00', 
            paddingBottom: '0.5rem', 
            marginBottom: '1.5rem',
            fontSize: isMobile ? '1.3rem' : '1.5rem'
          }}>
            Booking Records ({bookings.length} Total)
          </h2>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            {isMobile ? (
              <div>
                {bookings.map((booking, index) => {
                  const user = users.find(u => u.id === booking.userId);
                  const completedCount = booking.selectedDates?.filter(date => date.completed).length || 0;
                  const totalCount = booking.totalDates || 0;
                  const remaining = totalCount - completedCount;
                  
                  return (
                    <div key={booking.id} style={{
                      padding: '1rem',
                      borderBottom: '1px solid #eee',
                      backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white'
                    }}>
                      <div style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                        {user?.name || 'Unknown User'}
                      </div>
                      <div style={{ color: '#666', marginBottom: '0.5rem', fontSize: '0.8rem', wordBreak: 'break-all' }}>
                        {user?.email}
                      </div>
                      <div style={{ marginBottom: '0.5rem' }}>
                        <div style={{ fontWeight: '600', color: '#FF6A00' }}>{booking.plan?.name || booking.planName}</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>
                          {booking.plan?.features?.join(', ') || 'Standard features'}
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div><strong>Price:</strong> {booking.plan?.price || booking.planPrice}</div>
                        <div><strong>Total:</strong> {totalCount}</div>
                        <div><strong>Completed:</strong> <span style={{ color: '#10B981' }}>{completedCount}</span></div>
                        <div><strong>Remaining:</strong> <span style={{ color: remaining > 0 ? '#EF4444' : '#6B7280' }}>{remaining}</span></div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '20px', 
                          fontSize: '0.7rem',
                          backgroundColor: booking.status === 'confirmed' ? '#10B981' : '#6B7280',
                          color: 'white'
                        }}>
                          {booking.status || 'Active'}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#666' }}>
                          {new Date(booking.bookingDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#FF6A00', color: 'white' }}>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>User</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Plan</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Price</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Total Washes</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Completed</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Remaining</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Status</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Booked On</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => {
                    const user = users.find(u => u.id === booking.userId);
                    const completedCount = booking.selectedDates?.filter(date => date.completed).length || 0;
                    const totalCount = booking.totalDates || 0;
                    const remaining = totalCount - completedCount;
                    
                    return (
                      <tr key={booking.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white', borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '1rem', fontWeight: '600' }}>
                          {user?.name || 'Unknown User'}
                          <div style={{ fontSize: '0.8rem', color: '#666' }}>{user?.email}</div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ fontWeight: '600' }}>{booking.plan?.name || booking.planName}</div>
                          <div style={{ fontSize: '0.8rem', color: '#666' }}>
                            {booking.plan?.features?.join(', ') || 'Standard features'}
                          </div>
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: '#FF6A00' }}>
                          {booking.plan?.price || booking.planPrice}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '600' }}>{totalCount}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: '#10B981', fontWeight: '600' }}>{completedCount}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: remaining > 0 ? '#EF4444' : '#6B7280', fontWeight: '600' }}>
                          {remaining}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <span style={{ 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '20px', 
                            fontSize: '0.8rem',
                            backgroundColor: booking.status === 'confirmed' ? '#10B981' : '#6B7280',
                            color: 'white'
                          }}>
                            {booking.status || 'Active'}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
                          {new Date(booking.bookingDate).toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </section>

        {/* Detailed Wash Schedule */}
        <section>
          <h2 style={{ 
            color: '#333', 
            borderBottom: '3px solid #FF6A00', 
            paddingBottom: '0.5rem', 
            marginBottom: '1.5rem',
            fontSize: isMobile ? '1.3rem' : '1.5rem'
          }}>
            Detailed Wash Schedule
          </h2>
          {bookings.map(booking => {
            const user = users.find(u => u.id === booking.userId);
            return (
              <div key={booking.id} style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: isMobile ? '1rem' : '1.5rem', 
                marginBottom: '1.5rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem' }}>
                  <h3 style={{ 
                    color: '#FF6A00', 
                    margin: '0 0 0.5rem 0',
                    fontSize: isMobile ? '1.1rem' : '1.3rem'
                  }}>
                    {user?.name} - {booking.plan?.name || booking.planName}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    margin: 0,
                    fontSize: isMobile ? '0.8rem' : '1rem',
                    wordBreak: 'break-all'
                  }}>
                    Booking ID: {isMobile ? booking.id.substring(0, 8) + '...' : booking.id} | Booked: {new Date(booking.bookingDate).toLocaleDateString()}
                  </p>
                </div>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', 
                  gap: '1rem' 
                }}>
                  {booking.selectedDates?.map((dateInfo, index) => (
                    <div key={index} style={{ 
                      padding: isMobile ? '0.75rem' : '1rem', 
                      border: '1px solid #eee', 
                      borderRadius: '6px',
                      backgroundColor: dateInfo.completed ? '#F0FDF4' : '#FEF3C7'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: isMobile ? 'flex-start' : 'center', 
                        marginBottom: '0.5rem',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '0.5rem' : '0'
                      }}>
                        <div style={{ 
                          fontWeight: '600',
                          fontSize: isMobile ? '0.9rem' : '1rem'
                        }}>Wash #{index + 1}</div>
                        <button
                          onClick={() => toggleWashCompletion(booking.id, index, !dateInfo.completed)}
                          style={{
                            padding: isMobile ? '0.4rem 0.8rem' : '0.25rem 0.75rem',
                            border: 'none',
                            borderRadius: '20px',
                            fontSize: isMobile ? '0.7rem' : '0.8rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            backgroundColor: dateInfo.completed ? '#EF4444' : '#10B981',
                            color: 'white',
                            whiteSpace: 'nowrap',
                            alignSelf: isMobile ? 'flex-end' : 'auto',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          {dateInfo.completed ? (
                            <>
                              <FaHourglass />
                              {isMobile ? 'Incomplete' : 'Mark Incomplete'}
                            </>
                          ) : (
                            <>
                              <FaCheck />
                              {isMobile ? 'Complete' : 'Mark Complete'}
                            </>
                          )}
                        </button>
                      </div>
                      <div style={{ 
                        color: '#666', 
                        fontSize: isMobile ? '0.8rem' : '0.9rem'
                      }}>
                        <div>Date: {dateInfo.displayDate || dateInfo.date}</div>
                        <div>Time: {dateInfo.time}</div>
                        <div style={{ 
                          marginTop: '0.5rem',
                          color: dateInfo.completed ? '#10B981' : '#F59E0B',
                          fontWeight: '600'
                        }}>
                          Status: {dateInfo.completed ? 'Completed' : 'Scheduled'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* User Details Modal */}
        {showUserModal && selectedUser && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              {/* Modal Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid #FF6A00'
              }}>
                <h3 style={{
                  margin: 0,
                  color: '#FF6A00',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>Customer Details</h3>
                <button
                  onClick={() => setShowUserModal(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: '#666',
                    padding: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ef4444';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#666';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <FaTimes />
                </button>
              </div>

              {/* User Info Cards */}
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {/* Personal Information */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <h4 style={{
                    margin: '0 0 1rem 0',
                    color: '#333',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <FaUser style={{ marginRight: '0.5rem' }} /> Personal Information
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <strong style={{ color: '#666' }}>Name:</strong>
                      <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{selectedUser.name}</div>
                    </div>
                    <div>
                      <strong style={{ color: '#666' }}>Email:</strong>
                      <div style={{ marginTop: '0.25rem', fontWeight: '600', wordBreak: 'break-all' }}>{selectedUser.email}</div>
                    </div>
                    <div>
                      <strong style={{ color: '#666' }}>Mobile:</strong>
                      <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{selectedUser.mobile || 'Not provided'}</div>
                    </div>
                    <div>
                      <strong style={{ color: '#666' }}>Joined:</strong>
                      <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{new Date(selectedUser.createdAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                {(selectedUser.address || selectedUser.city || selectedUser.pincode) && (
                  <div style={{
                    backgroundColor: '#f0f9ff',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid #bae6fd'
                  }}>
                    <h4 style={{
                      margin: '0 0 1rem 0',
                      color: '#333',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} /> Service Location
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {selectedUser.address && (
                        <div>
                          <strong style={{ color: '#666' }}>Address:</strong>
                          <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{selectedUser.address}</div>
                        </div>
                      )}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                        {selectedUser.landmark && (
                          <div>
                            <strong style={{ color: '#666' }}>Landmark:</strong>
                            <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{selectedUser.landmark}</div>
                          </div>
                        )}
                        {selectedUser.city && (
                          <div>
                            <strong style={{ color: '#666' }}>City:</strong>
                            <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{selectedUser.city}</div>
                          </div>
                        )}
                        {selectedUser.pincode && (
                          <div>
                            <strong style={{ color: '#666' }}>Pincode:</strong>
                            <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{selectedUser.pincode}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Vehicle Information */}
                {(selectedUser.carType || selectedUser.carBrand || selectedUser.carModel) && (
                  <div style={{
                    backgroundColor: '#fef3c7',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid #fcd34d'
                  }}>
                    <h4 style={{
                      margin: '0 0 1rem 0',
                      color: '#333',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <FaCar style={{ marginRight: '0.5rem' }} /> Vehicle Details
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                      {selectedUser.carType && (
                        <div>
                          <strong style={{ color: '#666' }}>Car Type:</strong>
                          <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{selectedUser.carType}</div>
                        </div>
                      )}
                      {selectedUser.carBrand && (
                        <div>
                          <strong style={{ color: '#666' }}>Brand:</strong>
                          <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{selectedUser.carBrand}</div>
                        </div>
                      )}
                      {selectedUser.carModel && (
                        <div>
                          <strong style={{ color: '#666' }}>Model:</strong>
                          <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{selectedUser.carModel}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Booking Summary */}
                {(() => {
                  const userBookings = getUserBookings(selectedUser.id);
                  const washStats = calculateWashStats(userBookings);
                  return (
                    <div style={{
                      backgroundColor: '#f0fdf4',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      border: '1px solid #bbf7d0'
                    }}>
                      <h4 style={{
                        margin: '0 0 1rem 0',
                        color: '#333',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <FaChartBar style={{ marginRight: '0.5rem' }} /> Booking Summary
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                        <div>
                          <strong style={{ color: '#666' }}>Total Bookings:</strong>
                          <div style={{ marginTop: '0.25rem', fontWeight: '600', color: '#FF6A00' }}>{userBookings.length}</div>
                        </div>
                        <div>
                          <strong style={{ color: '#666' }}>Total Washes:</strong>
                          <div style={{ marginTop: '0.25rem', fontWeight: '600' }}>{washStats.totalWashes}</div>
                        </div>
                        <div>
                          <strong style={{ color: '#666' }}>Completed:</strong>
                          <div style={{ marginTop: '0.25rem', fontWeight: '600', color: '#10B981' }}>{washStats.completedWashes}</div>
                        </div>
                        <div>
                          <strong style={{ color: '#666' }}>Remaining:</strong>
                          <div style={{ marginTop: '0.25rem', fontWeight: '600', color: '#EF4444' }}>{washStats.remaining}</div>
                        </div>
                      </div>
                      <div style={{ marginTop: '1rem' }}>
                        <strong style={{ color: '#666' }}>Status:</strong>
                        <div style={{ marginTop: '0.25rem' }}>
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            backgroundColor: userBookings.length > 0 ? '#10B981' : '#6B7280',
                            color: 'white'
                          }}>
                            {userBookings.length > 0 ? 'Active Subscriber' : 'Regular User'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Close Button */}
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button
                  onClick={() => setShowUserModal(false)}
                  style={{
                    backgroundColor: '#FF6A00',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 2rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#FF6A00'}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;