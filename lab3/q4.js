const data = [];

// Retrieve all items
export function get_items() {
  return data;
}

// Add a new item if the ID does not exist
export function add_item(new_item) {
  if (!new_item.id) {
    return false;
  }

  const exist = data.find((element) => element.id === new_item.id);
  if (!exist) {
    data.push(new_item);
    return true;
  }

  return false;
}

// Update the title of an item by ID
export function update_item_title_by_id(id, new_title) {
  const index = findIndex(id);
  if (index === -1) {
    return false;
  }

  data[index].title = new_title;
  return true;
}

// Delete an item by ID
export function delete_item_by_id(id) {
  const index = findIndex(id);
  if (index === -1) {
    return false;
  }

  data.splice(index, 1);
  return true;
}

// Get the title of an item by ID
export function get_item_title_by_id(id) {
  const index = findIndex(id);
  if (index === -1) {
    return null;
  }

  return data[index].title;
}

// Helper function to find the index of an item by ID
function findIndex(id) {
  return data.findIndex((element) => element.id === id);
}
