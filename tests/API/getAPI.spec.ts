import { test, expect } from '@playwright/test';

test('Basic API GET request', async ({ request }) => {
  // Send a GET request to the JSONPlaceholder API
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  
  // Assert that the response status code is 200 (OK)
  expect(response.status()).toBe(200);
  
  // Parse the response JSON body
  const responseBody = await response.json();
  
  // Assert that the response body contains the expected title
  expect(responseBody.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
});
