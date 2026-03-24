import React from "react";
import "./css/Documentaion.css";
import schemaImage from "../../assets/Sqldatabase.png"; // place your image here

const Documentation = () => {
  return (
    <div className="docs-container">
      <h1 className="docs-title">Database Documentation</h1>

      {/* Image Section */}
      <div className="docs-image-section">
        <img src={schemaImage} alt="EER Diagram" />
      </div>

      {/* Overview */}
      <section className="docs-section">
        <h2>Overview</h2>
        <p>
          This database represents an E-commerce system including products,
          customers, orders, shipping, reviews, and discounts. The schema is
          normalized and uses foreign key relationships to maintain integrity.
        </p>
      </section>

      {/* Tables */}
      <section className="docs-section">
        <h2>Tables Description</h2>

        <div className="table-card">
          <h3>Categories</h3>
          <ul>
            <li>
              <b>category_id</b> (PK)
            </li>
            <li>
              <b>category_name</b>
            </li>
          </ul>
          <p>Stores product categories.</p>
        </div>

        <div className="table-card">
          <h3>Products</h3>
          <ul>
            <li>
              <b>product_id</b> (PK)
            </li>
            <li>
              <b>product_name</b>
            </li>
            <li>
              <b>product_price</b>
            </li>
            <li>
              <b>stock_quantity</b>
            </li>
            <li>
              <b>category_id</b> (FK)
            </li>
          </ul>
          <p>Each product belongs to one category.</p>
        </div>

        <div className="table-card">
          <h3>Customers</h3>
          <ul>
            <li>
              <b>customer_id</b> (PK)
            </li>
            <li>
              <b>customer_name</b>
            </li>
            <li>
              <b>customer_email</b>
            </li>
          </ul>
          <p>Stores customer details.</p>
        </div>

        <div className="table-card">
          <h3>Orders</h3>
          <ul>
            <li>
              <b>order_id</b> (PK)
            </li>
            <li>
              <b>order_date</b>
            </li>
            <li>
              <b>customer_id</b> (FK)
            </li>
          </ul>
          <p>Each order belongs to one customer.</p>
        </div>

        <div className="table-card">
          <h3>Order Details</h3>
          <ul>
            <li>
              <b>order_details_id</b> (PK)
            </li>
            <li>
              <b>order_id</b> (FK)
            </li>
            <li>
              <b>product_id</b> (FK)
            </li>
            <li>
              <b>quantity</b>
            </li>
          </ul>
          <p>Acts as a junction table between Orders and Products.</p>
        </div>

        <div className="table-card">
          <h3>Shipping</h3>
          <ul>
            <li>
              <b>shipping_id</b> (PK)
            </li>
            <li>
              <b>order_id</b> (FK)
            </li>
            <li>
              <b>ship_date</b>
            </li>
            <li>
              <b>delivery_date</b>
            </li>
          </ul>
          <p>Tracks shipment of each order.</p>
        </div>

        <div className="table-card">
          <h3>Reviews</h3>
          <ul>
            <li>
              <b>review_id</b> (PK)
            </li>
            <li>
              <b>product_id</b> (FK)
            </li>
            <li>
              <b>customer_id</b> (FK)
            </li>
            <li>
              <b>rating</b>
            </li>
            <li>
              <b>comment</b>
            </li>
          </ul>
          <p>Customers can review products.</p>
        </div>

        <div className="table-card">
          <h3>Discounts</h3>
          <ul>
            <li>
              <b>discount_id</b> (PK)
            </li>
            <li>
              <b>discount_amount</b>
            </li>
            <li>
              <b>product_id</b> (FK)
            </li>
          </ul>
          <p>Discounts applied to specific products.</p>
        </div>
      </section>

      {/* Relationships */}
      <section className="docs-section">
        <h2>Relationships</h2>
        <ul className="relation-list">
          <li>Category → Products (1 : Many)</li>
          <li>Customer → Orders (1 : Many)</li>
          <li>Orders → Order Details (1 : Many)</li>
          <li>Products → Order Details (1 : Many)</li>
          <li>Orders → Shipping (1 : 1)</li>
          <li>Customers → Reviews (1 : Many)</li>
          <li>Products → Reviews (1 : Many)</li>
          <li>Products → Discounts (1 : Many)</li>
        </ul>
      </section>
    </div>
  );
};

export default Documentation;
