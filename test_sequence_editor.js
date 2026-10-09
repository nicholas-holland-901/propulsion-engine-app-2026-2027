// test_sequence_editor.js
//
// functionality for creating and editing test sequences

const dragArea = document.getElementById("dragArea");

// Handle item dragging
document.querySelectorAll(".draggableItem").forEach(element => {
  let offsetX, offsetY;
  let cur_x;

  element.addEventListener("mousedown", e => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;

    function onMove(e) {
      const rect = dragArea.getBoundingClientRect();
      const rawX = e.clientX - rect.left - offsetX;
      const rawY = e.clientY - rect.top - offsetY;

      const elementRect = element.getBoundingClientRect();

      // Clamp position inside the draggable area
      const x = Math.min(Math.max(rawX, 0 - rect.x), rect.width - elementRect.width);
      const y = Math.min(Math.max(rawY, 0), rect.height - elementRect.height);

      element.style.left = x + "px";
      element.style.top = y + "px";

      cur_x = x;

      checkCombination(element);
    }

    function onUp() {
        // Delete draggable element if let go over piece selection area (to the left of drag area)
        if (cur_x + element.getBoundingClientRect().width < 0) {
            element.remove();
        } else if (cur_x < 0) {
            element.style.left = 0 + "px";
        }
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  });
});