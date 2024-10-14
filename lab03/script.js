import { performQuestion1 } from "./q1.js";
import { performQuestion2 } from "./q2.js";
import { performQuestion3 } from "./q3.js";
import {
  get_items,
  add_item,
  update_item_title_by_id,
  delete_item_by_id,
  get_item_title_by_id,
} from "./q4.js";

performQuestion1();
performQuestion2();
performQuestion3();
performQuestion4();

function performQuestion4() {
  console.log("************Running Tests for Question 4************");

  // Test Case 1: Add items
  console.log("Test Case 1: Adding items");
  console.log(add_item({ id: 1, title: "Item 1" })); // Expected: true
  console.log(add_item({ id: 2, title: "Item 2" })); // Expected: true
  console.log(add_item({ id: 1, title: "Duplicate Item 1" })); // Expected: false (Duplicate ID)

  console.log("All Items after adding:", get_items());

  // Test Case 2: Update item title by id
  console.log("\nTest Case 2: Updating item title");
  console.log(update_item_title_by_id(1, "Updated Item 1")); // Expected: true
  console.log(update_item_title_by_id(3, "Non-existent Item")); // Expected: false (ID 3 does not exist)

  console.log("All Items after update:", get_items());

  // Test Case 3: Get item title by id
  console.log("\nTest Case 3: Getting item title by ID");
  console.log(get_item_title_by_id(1)); // Expected: "Updated Item 1"
  console.log(get_item_title_by_id(3)); // Expected: null (ID 3 does not exist)

  // Test Case 4: Delete item by id
  console.log("\nTest Case 4: Deleting item by ID");
  console.log(delete_item_by_id(2)); // Expected: true (Item with ID 2 will be deleted)
  console.log(delete_item_by_id(3)); // Expected: false (ID 3 does not exist)

  console.log("All Items after deletion:", get_items());

  // Edge Case: Adding item with missing id
  console.log("\nTest Case 5: Adding item with missing ID");
  console.log(add_item({ title: "No ID Item" })); // Expected: false

  console.log("All Items after all operations:", get_items());
}
