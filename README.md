# Frontend of SENTINEL

The frontend of **SENTINEL** is a web interface designed to allow maintenance managers to easily interact with the system. This application allows the management of the industrial machinery surveyed, the monitoring of its performance, and the management of notifications. With an intuitive interface and advanced functionalities, the frontend is a key access point for the entire system.

---

## Main functionalities

### **User authentication and management**.
- **Registration**: Maintenance managers can create their own account directly from the application.
- **Login**: Secure access to the application using credentials.
- **Profile Area**: Section dedicated to summarising the maintenance manager's personal information.

### **Machinery Management**.
- **Census**: Possibility of adding new machines to the system.
- **Display**: Interactive table showing all surveyed machines, with details of each machine.
- **Machinery Operations**:
    - Start
    - Stop
    - Work
    - Maintenance
- **Data Editing**: Updating information on surveyed machinery.

### **Monitoring and analysis**.
- **Dashboard analytics**: Visualisation of data collected from machinery through interactive graphs allowing detailed analysis of performance and operational status.

### **Notification management**
- **Notification display**: List of notifications received by the system, such as failure alerts or critical updates.
- **Notification Management**: Ability to mark notifications as read to maintain order and control.

---

## Technologies used

- **Framework**: React.js
- **State Libraries**: Redux Toolkit for global state management.
- **Graphic visualisations**: Grafana (via backend integration) for advanced dashboards.
- **Styles**: Material UI (MUI) for fast and responsive development.
- **Notification management**: Customised libraries for the interface.

---

## Prerequisites

- **Node.js**: Version 22 or higher.
- **npm** or **yarn**: For package management.

---

## Installation and start-up

1. Clone the repository:
   ```bash
   git clone https://github.com/UniSalento-IDALab-IoTCourse-2023-2024/wot-project-2023-2024-Frontend-Mirko-Caforio.git
   docker compose up -d
   ```