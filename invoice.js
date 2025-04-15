  window.onload = function () {
        const rows = document.querySelectorAll('#invoice-table .invoice-row');
        let total = 0;
    
        rows.forEach(row => {
          const tds = row.querySelectorAll('td');
          const priceText = tds[tds.length - 1]?.textContent.trim();
          const price = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
          if (!isNaN(price)) total += price;
        });
    
        document.getElementById('invoice-total').textContent = total.toFixed(2);
      };
