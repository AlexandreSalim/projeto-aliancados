export function getMessageForDate(date: Date | null): string {
    const dateMap: { [key: string]: string } = {
      '2024-12-07': `Dia 07: primeiro dia do evento x. mais coisas sobre o evento.
      horario do evento e mais.`,
      '2024-12-08': `Dia 08: segundo dia do evento x. mais coisas sobre o evento.
      horario do evento e mais.`,
      '2024-12-09': `Dia 09: terceiro dia do evento x. mais coisas sobre o evento.
      horario do evento e mais.`,
      '2024-12-25': 'Dia 25: Natal.',
      
    };
  
    if (date) {
      const formattedDate = date.toISOString().split('T')[0]; // Formata a data como 'YYYY-MM-DD'
      return dateMap[formattedDate] || ``;
    }
  
    return '';
  }