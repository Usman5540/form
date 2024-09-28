const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Sample in-memory data
let customers = [
  { id: 1, name: 'Ahmed Khan', email: 'ahmed.khan@example.pk' },
  { id: 2, name: 'Fatima Bano', email: 'fatima.bano@example.pk' },
  { id: 3, name: 'Ali Raza', email: 'ali.raza@example.pk' },
  { id: 4, name: 'Ayesha Malik', email: 'ayesha.malik@example.pk' },
  { id: 5, name: 'Usman Ahmed', email: 'usman.ahmed@example.pk' },
  { id: 6, name: 'Zara Saeed', email: 'zara.saeed@example.pk' },
  { id: 7, name: 'Bilal Khan', email: 'bilal.khan@example.pk' },
  { id: 8, name: 'Sana Javed', email: 'sana.javed@example.pk' },
  { id: 9, name: 'Hassan Ali', email: 'hassan.ali@example.pk' },
  { id: 10, name: 'Mehwish Tariq', email: 'mehwish.tariq@example.pk' },
  { id: 11, name: 'Kamran Sheikh', email: 'kamran.sheikh@example.pk' },
  { id: 12, name: 'Nida Yasir', email: 'nida.yasir@example.pk' },
  { id: 13, name: 'Farhan Aslam', email: 'farhan.aslam@example.pk' },
  { id: 14, name: 'Rabia Khan', email: 'rabia.khan@example.pk' },
  { id: 15, name: 'Imran Haider', email: 'imran.haider@example.pk' }
];


// Route: Login Page
app.get("/", (req, res) => {
  res.render("login");
// res.end("working")
});

// Route: Dashboard
app.get("/dashboard", (req, res) => {
  res.render("dashboard", { totalCustomers: customers.length });
});

// Route: List of Customers
app.get("/customers", (req, res) => {
  res.render("customer_list", { customers });
});

// Route: Add New Customer Form
app.get("/customers/new", (req, res) => {
  res.render("add_customer");
});

// Handle Add New Customer Form
app.post("/customers/new", (req, res) => {
  const { name, email } = req.body;
  customers.push({ id: customers.length + 1, name, email });
  res.redirect("/customers");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
