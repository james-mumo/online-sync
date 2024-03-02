import React from 'react';
import {
    DataGrid,
    GridRowModes,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { updateRecord, deleteRecord } from '../../../logic/api';

export default function FullFeaturedCrudGrid({ records }) {
    const [rows, setRows] = React.useState(records);
    const [rowModesModel, setRowModesModel] = React.useState({});

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => async () => {
        try {
            // Fetch the row to be updated from the state
            const updatedRow = rows.find(row => row.id === id);

            // Send a PUT request to update the record in the backend
            await updateRecord(id, updatedRow);

            // If the request is successful, update the row mode in the state
            setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
        } catch (error) {
            console.error('Error updating record:', error);
        }
    };

    const handleDeleteClick = (id) => async () => {
        try {
            // Send a DELETE request to delete the record in the backend
            await deleteRecord(id);

            // If the request is successful, update the rows in the state
            setRows(rows.filter((row) => row.id !== id));
        } catch (error) {
            console.error('Error deleting record:', error);
        }
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = async (newRow) => {
        try {
            // Send a PUT request to update the record in the backend
            await updateRecord(newRow.id, newRow);

            // If the request is successful, update the row in the state
            const updatedRow = { ...newRow, isNew: false };
            setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
            return updatedRow;
            // You may want to handle errors here if the request fails
        } catch (error) {
            console.error('Error updating record:', error);
        }
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const getRowClassName = (params) => {
        const hoursRemaining = params.row.hoursDue;
        if (hoursRemaining < 0) {
            return 'bg-gray-300';
        } else if (hoursRemaining < 12) {
            return 'bg-red-400';
        } else if (hoursRemaining < 24) {
            return 'bg-red-800';
        } else if (hoursRemaining < 48) {
            return 'bg-yellow-500';
        } else {
            return 'bg-green-400 hover:bg-green-500';
        }
    };

    const columns = [
        { field: 'name', headerName: 'Name', width: 180, editable: true, sortable: true },
        { field: 'studentEmail', headerName: 'Student Email', width: 220, editable: true, sortable: true },
        {
            field: 'assignmentType', headerName: 'Assignment Type', width: 180, editable: true,
            type: 'singleSelect',
            valueOptions: ['Lab Assignment', 'Quiz Assignment', 'Network Assignment', 'Zoom Meeting'],
            sortable: true
        },
        { field: 'assignmentName', headerName: 'Assignment Name', width: 220, editable: true, sortable: true },
        { field: 'dateTimeDue', headerName: 'Date/Time Due', width: 220, editable: true, sortable: true },
        {
            field: 'hoursDue', headerName: 'Hours Remaining', width: 220, editable: true,
            renderCell: (params) => {
                const value = params.value;
                return value < 0 ? 'Overdue' : value;
            },
            sortable: true
        },
        { field: 'score', headerName: 'Score', width: 120, editable: true, sortable: true },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Pending', 'Completed'],
            sortable: true
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            icon={<SaveIcon />}
                            label="Save"
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            icon={<CancelIcon />}
                            label="Cancel"
                            onClick={handleCancelClick(id)}
                        />,
                    ];
                }

                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        onClick={handleEditClick(id)}
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                    />,
                ];
            },
        },
    ];

    return (
        <div className="bg-gray-100 p-4 rounded-lg w-fit">
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                getRowClassName={getRowClassName}
                sortingOrder={['desc', 'asc']}
                className="border border-red-800"
            />
        </div>
    );
}
