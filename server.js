const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Sample in-memory data
let customers = [
  {
    id: 1,
    company: 'Tech Innovations',
    person: 'Ahmed Khan',
    designation: 'CEO',
    officeAddress: '123 Tech Street, Silicon Valley',
    officePhone: '123-456-7890',
    residenceAddress: '456 Residential Ave, Silicon Valley',
    fax: '123-456-7891',
    mobile: '987-654-3210',
    email: 'ahmed.khan@techinnovations.com',
    website: 'www.techinnovations.com',
    description: 'Leading technology solutions provider.'
  },
  {
    id: 2,
    company: 'Creative Designs',
    person: 'Fatima Bano',
    designation: 'Creative Director',
    officeAddress: '789 Design Rd, New York',
    officePhone: '321-654-0987',
    residenceAddress: '321 Home St, New York',
    fax: '321-654-0988',
    mobile: '654-321-9870',
    email: 'fatima.bano@creativedesigns.com',
    website: 'www.creativedesigns.com',
    description: 'Providing innovative design solutions.'
  },
  {
    id: 3,
    company: 'Green Energy Co.',
    person: 'Ali Raza',
    designation: 'Operations Manager',
    officeAddress: '101 Green Blvd, San Francisco',
    officePhone: '456-789-0123',
    residenceAddress: '202 Home Ln, San Francisco',
    fax: '456-789-0124',
    mobile: '789-012-3456',
    email: 'ali.raza@greenenergy.com',
    website: 'www.greenenergy.com',
    description: 'Sustainable energy solutions for the future.'
  }
];


// Route: Login Page
app.get('/', (req, res) => {
    res.render('login', (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Something went wrong while rendering the page');
        }
    });
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
  const { company, person, designation, officeAddress, officePhone, residenceAddress, fax, mobile, email, website, description } = req.body;
  customers.push({
    id: customers.length + 1,
    company,
    person,
    designation,
    officeAddress,
    officePhone,
    residenceAddress,
    fax,
    mobile,
    email,
    website,
    description
  });
  res.redirect("/customers");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
