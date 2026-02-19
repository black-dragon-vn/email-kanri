# Email Kanri - Employee Management System

A full-stack Employee Management System built with Spring Boot, React, and MySQL.

## Tech Stack

**Backend:**
- Java Spring Boot
- Spring Data JPA / Hibernate
- MySQL

**Frontend:**
- React + Vite
- ESLint

## Prerequisites

- Java 17+
- Node.js 18+
- MySQL 8+

## Getting Started

### Backend Setup

1. Create MySQL database:
```sql
CREATE DATABASE ems;
```

2. Configure `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_password
```

3. Run the Spring Boot app:
```bash
./mvnw spring-boot:run
```

### Frontend Setup
```bash
cd ems-frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`  
Backend runs on: `http://localhost:8080`