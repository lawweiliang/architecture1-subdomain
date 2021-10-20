import React from 'react'

export default function ReceipeTile() {
  return (
    <div class="bg-white shadow p-3 rounded lg:w-64">
    <div>
      <div class="bg-cover bg-center bg-gray-300 h-32 rounded">
      </div>
    </div>
    <div class="mt-6">
      <p class="text-lg text-bold tracking-wide text-gray-600 mb-2">
        Title
      </p>
      
    <p class="text-sm text-gray-600 font-hairline">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    </div>
    <div class="mt-6">
      <button class="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Default
      </button>
    </div>
  </div>
  );
}
