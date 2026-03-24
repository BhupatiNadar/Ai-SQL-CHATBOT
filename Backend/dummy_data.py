from sqlalchemy import text
from datetime import date
import database 

def practice_dummy_data():
    with database.SessionLocal() as session:

        # -------------------------
        # Categories
        # -------------------------
        session.execute(text("""
        INSERT INTO categories (category_name) VALUES
        ('Electronics'),
        ('Clothing'),
        ('Books'),
        ('Home Appliances'),
        ('Sports & Fitness');
        """))

        # -------------------------
        # Products (Realistic)
        # -------------------------
        session.execute(text("""
        INSERT INTO products (product_name, product_price, stock_quantity, category_id) VALUES
        ('iPhone 13', 65000, 15, 1),
        ('Samsung Galaxy S21', 52000, 20, 1),
        ('Dell Inspiron Laptop', 58000, 10, 1),
        ('Sony Headphones', 3000, 30, 1),
        ('Men T-Shirt (Nike)', 1200, 50, 2),
        ('Women Kurti', 900, 40, 2),
        ('Levi Jeans', 2500, 25, 2),
        ('Python Programming Book', 1500, 20, 3),
        ('Data Science Handbook', 2200, 15, 3),
        ('Cooking Guide', 800, 35, 3),
        ('Mixer Grinder', 3500, 12, 4),
        ('Air Fryer', 7000, 8, 4),
        ('Vacuum Cleaner', 9000, 6, 4),
        ('Yoga Mat', 700, 60, 5),
        ('Dumbbells Set', 2000, 25, 5),
        ('Cricket Bat', 1800, 18, 5),
        ('Football', 900, 22, 5),
        ('Bluetooth Speaker', 2500, 28, 1),
        ('Smart Watch', 4000, 14, 1),
        ('HP Printer', 8500, 9, 1);
        """))

        # -------------------------
        # Customers (Real Names)
        # -------------------------
        session.execute(text("""
        INSERT INTO customers (customer_name, customer_email) VALUES
        ('Amit Sharma', 'amit@gmail.com'),
        ('Priya Verma', 'priya@gmail.com'),
        ('Rahul Mehta', 'rahul@gmail.com'),
        ('Sneha Patil', 'sneha@gmail.com'),
        ('Arjun Reddy', 'arjun@gmail.com'),
        ('Neha Gupta', 'neha@gmail.com'),
        ('Vikram Singh', 'vikram@gmail.com'),
        ('Pooja Kulkarni', 'pooja@gmail.com'),
        ('Rohit Yadav', 'rohit@gmail.com'),
        ('Anjali Desai', 'anjali@gmail.com'),
        ('Karan Malhotra', 'karan@gmail.com'),
        ('Meera Joshi', 'meera@gmail.com'),
        ('Suresh Nair', 'suresh@gmail.com'),
        ('Divya Iyer', 'divya@gmail.com'),
        ('Manish Gupta', 'manish@gmail.com'),
        ('Kavita Sharma', 'kavita@gmail.com'),
        ('Ajay Kumar', 'ajay@gmail.com'),
        ('Nisha Singh', 'nisha@gmail.com'),
        ('Deepak Verma', 'deepak@gmail.com'),
        ('Ritu Agarwal', 'ritu@gmail.com');
        """))

        # -------------------------
        # Orders
        # -------------------------
        session.execute(text("""
        INSERT INTO orders (order_date, customer_id) VALUES
        ('2026-03-01', 1),
        ('2026-03-02', 2),
        ('2026-03-03', 3),
        ('2026-03-04', 4),
        ('2026-03-05', 5),
        ('2026-03-06', 6),
        ('2026-03-07', 7),
        ('2026-03-08', 8),
        ('2026-03-09', 9),
        ('2026-03-10', 10),
        ('2026-03-11', 11),
        ('2026-03-12', 12),
        ('2026-03-13', 13),
        ('2026-03-14', 14),
        ('2026-03-15', 15),
        ('2026-03-16', 16),
        ('2026-03-17', 17),
        ('2026-03-18', 18),
        ('2026-03-19', 19),
        ('2026-03-20', 20);
        """))

        # -------------------------
        # Order Details
        # -------------------------
        session.execute(text("""
        INSERT INTO order_details (order_id, product_id, quantity) VALUES
        (1,1,1),(2,5,2),(3,8,1),(4,12,1),(5,15,2),
        (6,3,1),(7,2,1),(8,9,2),(9,14,1),(10,16,1),
        (11,4,2),(12,7,1),(13,10,3),(14,18,1),(15,6,2),
        (16,11,1),(17,13,1),(18,17,2),(19,19,1),(20,20,1);
        """))

        # -------------------------
        # Reviews
        # -------------------------
        session.execute(text("""
        INSERT INTO reviews (product_id, customer_id, rating, comment) VALUES
        (1,1,4.5,'Excellent phone'),
        (2,2,4.0,'Good performance'),
        (3,3,4.2,'Worth the price'),
        (5,4,3.8,'Nice quality'),
        (8,5,4.7,'Very informative book'),
        (12,6,4.1,'Useful appliance'),
        (14,7,4.6,'Comfortable'),
        (16,8,4.3,'Good bat'),
        (18,9,4.0,'Loud sound'),
        (19,10,4.4,'Stylish watch');
        """))

        # -------------------------
        # Shipping
        # -------------------------
        session.execute(text("""
        INSERT INTO shipping (order_id, ship_date, delivery_date) VALUES
        (1,'2026-03-02','2026-03-05'),
        (2,'2026-03-03','2026-03-06'),
        (3,'2026-03-04','2026-03-07'),
        (4,'2026-03-05','2026-03-08'),
        (5,'2026-03-06','2026-03-09'),
        (6,'2026-03-07','2026-03-10'),
        (7,'2026-03-08','2026-03-11'),
        (8,'2026-03-09','2026-03-12'),
        (9,'2026-03-10','2026-03-13'),
        (10,'2026-03-11','2026-03-14');
        """))

        session.commit()