fetch('/api/products')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('products');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Price: $${p.price}</p>
        ${p.offer ? `<p class="offer">${p.offer}</p>` : ''}
        <button onclick="order('${p.name}')">Order</button>
      `;
      container.appendChild(div);
    });
  });

function order(name) {
  fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product: name })
  })
  .then(res => res.json())
  .then(data => alert(data.status));
}
fetch('/api/products')
  .then(res => {
    if (res.status === 401) {
      window.location.href = '/login.html'; // auto-redirect if session expired
      return;
    }
    return res.json();
  })
  .then(products => {
    const container = document.getElementById('products');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Price: $${p.price}</p>
        ${p.offer ? `<p class="offer">${p.offer}</p>` : ''}
        <button onclick="order('${p.name}')">Order</button>
      `;
      container.appendChild(div);
    });
  });

function order(name) {
  fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product: name })
  })
  .then(res => res.json())
  .then(data => alert(data.status));
}
fetch('/api/products')
  .then(res => {
    if (res.status === 401) {
      window.location.href = '/login.html'; // auto-redirect if session expired
      return;
    }
    return res.json();
  })
  .then(products => {
    const container = document.getElementById('products');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Price: $${p.price}</p>
        ${p.offer ? `<p class="offer">${p.offer}</p>` : ''}
        <button onclick="order('${p.name}')">Order</button>
      `;
      container.appendChild(div);
    });
  });

function order(name) {
  fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product: name })
  })
  .then(res => res.json())
  .then(data => alert(data.status));
}
fetch('/api/products')
  .then(res => {
    if (res.status === 401) {
      window.location.href = '/login.html'; // auto-redirect if session expired
      return;
    }
    return res.json();
  })
  .then(products => {
    const container = document.getElementById('products');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Price: $${p.price}</p>
        ${p.offer ? `<p class="offer">${p.offer}</p>` : ''}
        <button onclick="order('${p.name}')">Order</button>
      `;
      container.appendChild(div);
    });
  });

function order(name) {
  fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product: name })
  })
  .then(res => res.json())
  .then(data => alert(data.status));
}

