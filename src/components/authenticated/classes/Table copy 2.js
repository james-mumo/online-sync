import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { addRecord } from '../../../logic/api';
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
    randomCreatedDate,
    randomTraderName,
    randomId,
    randomArrayItem,
} from '@mui/x-data-grid-generator';

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
    return randomArrayItem(roles);
};

const initialRows = [
    {
        id: randomId(),
        name: randomTraderName(),
        studentEmail: randomTraderName(),
        assignmentType: 'Lab',
        dateTimeDue: randomCreatedDate(),
        status: 'Pending',
    },
    {
        id: randomId(),
        name: randomTraderName(),
        studentEmail: randomTraderName(),
        assignmentType: 'Normal',
        dateTimeDue: randomCreatedDate(),
        status: 'Completed',
    },
    {
        id: randomId(),
        name: randomTraderName(),
        studentEmail: randomTraderName(),
        assignmentType: 'Lab',
        dateTimeDue: randomCreatedDate(),
        status: 'Pending',
    },
];

// function EditToolbar(props) {
//     const { setRows, setRowModesModel } = props;

//     const handleClick = async () => {
//         try {
//             const newData = { name: '', studentEmail: '', assignmentType: '', dateTimeDue: '', status: '' };
//             const newRecord = await addRecord(newData);
//             console.log(newRecord);

//             const recordWithId = { ...newRecord, id: newRecord._id };

//             setRows((oldRows) => [...oldRows, recordWithId]);
//             setRowModesModel((oldModel) => ({
//                 ...oldModel,
//                 [recordWithId.id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//             }));
//         } catch (error) {
//             console.error('Error adding record:', error);
//         }
//     };
//     return (
//         <GridToolbarContainer>
//             <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//                 Add record
//             </Button>
//         </GridToolbarContainer>
//     );
// }

export default function FullFeaturedCrudGrid() {
    const [rows, setRows] = React.useState(initialRows);
    const [rowModesModel, setRowModesModel] = React.useState({});

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));
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

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns = [
        { field: 'name', headerName: 'Name', width: 180, editable: true },
        { field: 'studentEmail', headerName: 'Student Email', width: 220, editable: true },
        {
            field: 'assignmentType', headerName: 'Assignment Type', width: 180, editable: true,
            type: 'singleSelect',
            valueOptions: ['Lab', 'Assignment'],
        },
        { field: 'dateTimeDue', headerName: 'Date/Time Due', type: 'dateTime', width: 220, editable: true },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Pending', 'Completed'],

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
        <div className="bg-teal-100 p-4 rounded-lg w-fit">
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                className="border border-red-800"
                // slots={{
                //     toolbar: EditToolbar,
                // }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
            />
        </div>

    );
}
