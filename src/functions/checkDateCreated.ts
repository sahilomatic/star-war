function checkDateCreated(): void {
    const weeklyMilliseconds = 604800000;
  
    let dateCreatedData: string | null = localStorage.getItem("date-created");
    let dateCreated: number = 0;
    if (dateCreatedData) {
      dateCreated = JSON.parse(dateCreatedData);
    }
  
    const now: number = new Date().getTime();
    let timeDifference: number = now - dateCreated;
  
    if (timeDifference > weeklyMilliseconds) {
      localStorage.clear();
    }
  }
  
  export { checkDateCreated };
  