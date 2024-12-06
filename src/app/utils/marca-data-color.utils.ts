export const specialDates: { [key: string]: string } = {
    '2024-12-07': 'black-bg-rigth',  
    '2024-12-08': 'black-bg-meio', 
    '2024-12-09': 'black-bg-left', 
    '2024-12-25': 'red-bg'
  };
  
  export function getSpecialDateClass(date: Date): string {
    const formattedDate = formatDate(date);
    return specialDates[formattedDate] || '';
  }
  
  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  