   function getInvoiceTotal() {
        const rows = document.querySelectorAll('#invoice-table .invoice-row');
        let total = 0;
      
        rows.forEach(row => {
          const tds = row.querySelectorAll('td');
          const priceText = tds[tds.length - 1].textContent.trim();
          const price = parseFloat(priceText.replace(/[^0-9.-]+/g,"")); // remove $ or commas
      
          if (!isNaN(price)) {
            total += price;
          }
        });
      
        console.log("Total Price:", total.toFixed(2));
        return total;
      }
      
      // Example usage
      const grandTotal = getInvoiceTotal();
  
  
  
      document.getElementById('invoice-total').textContent = grandTotal.toFixed(2);
