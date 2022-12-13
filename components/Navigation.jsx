import React from 'react'

export default function Navigation() {
  return (
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4"> Bryanna Gardner</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/work" class="nav-link">Work</a></li>
        <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
        <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
      </ul>
    </header>
  </div>

  )
}
