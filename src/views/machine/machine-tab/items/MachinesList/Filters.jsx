export const machineFilters = {
    machineStatus: {
        active: {
            status: false,
            value: "ACTIVE",
            show: true,
            color: 'success'
        },
        working: {
            status: false,
            value: "WORKING",
            show: true,
            color: 'info'
        },
        inactive: {
            status: false,
            value: "INACTIVE",
            show: true,
            color: 'error'
        },
        maintenance: {
            status: false,
            value: "MAINTENANCE",
            show: true,
            color: 'warning'
        },
        all: {
            status: true,
            show: false
        }
    },
    all: false
}