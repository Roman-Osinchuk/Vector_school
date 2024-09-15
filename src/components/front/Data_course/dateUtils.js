export const calculateDaysLeft = (startDate) => {
    const [day, month, year] = startDate.split('-'); 
    const targetDate = new Date(`${year}-${month}-${day}`); 
    const currentDate = new Date();
    
    const differenceInTime = targetDate - currentDate;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); 
  
    return differenceInDays > 0 ? differenceInDays : 0; 
  };
  
  
  export const courseStartDates = {
    java: '19-09-2024',
    web: '09-10-2024'
  };
  
  