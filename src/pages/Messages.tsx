import React from 'react';

export function Messages() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">Messages</h1>
      <div className="mt-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((message) => (
              <li key={message}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Message Subject {message}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">2h ago</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}