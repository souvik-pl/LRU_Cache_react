# LRU Cache implementation in React
This repository accompanies the article on [Understanding LRU Cache](https://javascript.plainenglish.io/understanding-lru-cache-b46c48e07e45).
LRU stands for "Least Recently Used," and an LRU cache is a type of data structure that maintains a limited number of items and automatically removes the least recently used item when the limit is reached. The purpose of an LRU cache is to provide a space-efficient way to store a subset of items that are frequently accessed, with the idea that more recently used items are likely to be used again in the near future.

Here's a brief overview of how an LRU cache typically works:
- **Capacity:** The cache has a fixed capacity, defining the maximum number of items it can store.
- **Access Operations:** When an item is accessed (read or updated), it becomes the most recently used item. The order of access is tracked.
- **Eviction:** When the cache reaches its capacity and a new item needs to be added, the least recently used item is evicted to make space for the new item.

## Installation

- Pull this branch into your local system.
- Make sure you have Node installed (preferrably Node v18.17.1).
- Navigate to the project directory and run 
  ```
  npm install
  ```
- Once all the dependencies have been installed, run the following command to start the dev server.
  ```
  npm run dev
  ```
