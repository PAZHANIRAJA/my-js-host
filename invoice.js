 document.addEventListener('DOMContentLoaded', function () {
      const rows = Array.from(document.querySelectorAll('.invoice-row'));
      const rowsPerPage = 4;  // Adjust the number of rows per page here
      let grandTotal = 0.0;

      // Function to calculate and update totals
      function calculateTotals() {
        let subtotal = 0.0;

        rows.forEach((row, index) => {
          const amountCell = row.querySelectorAll('td')[5]; // 6th column
          const amount = parseFloat(amountCell.textContent.replace(/[^0-9.]/g, '')) || 0;
          subtotal += amount;

          // Add subtotal row at the end of each page (after every rowsPerPage)
          if ((index + 1) % rowsPerPage === 0|| index === rows.length - 1) {
            const subtotalRow = document.createElement('tr');
            subtotalRow.innerHTML = `
            
              <td class="tdat3" colspan="5" style="text-align: right;"><strong>Subtotal (Page ${Math.floor(index / rowsPerPage) + 1}):</strong></td>
              <td class="tdat3"><strong>${subtotal.toFixed(2)}</strong></td>
            `;
            row.after(subtotalRow);
            subtotal = 0; // Reset subtotal after each page
          }

          grandTotal += amount;
        });

        // Update grand total in the footer
        document.getElementById('invoice-total').textContent = grandTotal.toFixed(2);
      }

      // Insert page breaks and calculate totals
      function addPageBreaks() {
        for (let i = 0; i < rows.length; i += rowsPerPage) {
          const chunk = rows.slice(i, i + rowsPerPage);

          // Insert page break except after the last group
          if (i + rowsPerPage < rows.length) {
            const breakRow = document.createElement('tr');
            breakRow.classList.add('page-break');
            breakRow.innerHTML = `<td colspan="6"></td>`;
            chunk[chunk.length - 1].after(breakRow);
          }
        }
      }

      // Run the functions
      calculateTotals();
      addPageBreaks();
    });
