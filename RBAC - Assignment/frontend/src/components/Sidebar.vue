<template>
    <aside class="bg-gray-800 text-white w-64 h-full fixed">
      <div class="p-4">
        <h1 class="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NuxtLink
              to="/users"
              class="block px-4 py-2 hover:bg-gray-700"
              active-class="bg-gray-700"
            >
              Users
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/roles"
              class="block px-4 py-2 hover:bg-gray-700"
              active-class="bg-gray-700"
            >
              Roles
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
</template>
  