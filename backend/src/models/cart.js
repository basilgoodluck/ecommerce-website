class Cart {
    constructor({ userId, items = [] }) {
      this.userId = userId; 
      this.items = items; 
      this.createdAt = new Date();
      this.updatedAt = new Date(); 
    }
  }
  
  export { Cart };
  