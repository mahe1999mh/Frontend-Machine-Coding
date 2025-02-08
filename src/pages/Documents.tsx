import React from 'react';
import { FileText } from 'lucide-react';

export function Documents() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">Documents</h1>
      <div className="mt-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((doc) => (
              <li key={doc}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <FileText className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Document {doc}.pdf</div>
                      <div className="text-sm text-gray-500">Updated 2 hours ago</div>
                    </div>
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