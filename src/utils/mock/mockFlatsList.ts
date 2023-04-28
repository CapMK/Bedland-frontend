import { Building, Flat } from 'types/shared.types';
import mockBuildingsList from './mockBuildingsList';

const flatsJson = `[
    {
        "id": 1,
        "version": 0,
        "createDate": "2023-02-14T00:00:00",
        "updateDate": "2023-02-14T00:00:00",
        "buildingId": 1,
        "number": "1",
        "floor": 1,
        "shapePath": "X1-Y17-Z8273"
    },
    {
        "id": 2,
        "version": 0,
        "createDate": "2023-02-14T00:00:00",
        "updateDate": "2023-02-14T00:00:00",
        "buildingId": 1,
        "number": "2",
        "floor": 1,
        "shapePath": "X45-Y1457-Z63"
    },
    {
        "id": 3,
        "version": 0,
        "createDate": "2023-02-14T00:00:00",
        "updateDate": "2023-02-14T00:00:00",
        "buildingId": 1,
        "number": "3",
        "floor": 2,
        "shapePath": "X351-Y1657-Z84563"
    },
    {
        "id": 4,
        "version": 0,
        "createDate": "2023-02-14T00:00:00",
        "updateDate": "2023-02-14T00:00:00",
        "buildingId": 1,
        "number": "4",
        "floor": 2,
        "shapePath": "X342-Y1537-Z83573"
    },
    {
        "id": 5,
        "version": 0,
        "createDate": "2023-02-14T00:00:00",
        "updateDate": "2023-02-14T00:00:00",
        "buildingId": 2,
        "number": "1",
        "floor": 2,
        "shapePath": "X1-Y17-Z8273"
    },
    {
        "id": 6,
        "version": 0,
        "createDate": "2023-02-14T00:00:00",
        "updateDate": "2023-02-14T00:00:00",
        "buildingId": 2,
        "number": "2",
        "floor": 1,
        "shapePath": "X3451-Y1457-Z8273"
    },
    {
        "id": 7,
        "version": 0,
        "createDate": "2023-02-14T00:00:00",
        "updateDate": "2023-02-14T00:00:00",
        "buildingId": 3,
        "number": "1",
        "floor": 2,
        "shapePath": "X4351-Y34517-Z8273"
    },
    {
        "id": 8,
        "version": 0,
        "createDate": "2023-02-14T00:00:00",
        "updateDate": "2023-02-14T00:00:00",
        "buildingId": 4,
        "number": "1",
        "floor": 1,
        "shapePath": "X3451-Y13457-Z8273"
    },
    {
        "id": 9,
        "version": 0,
        "createDate": "2023-02-14T00:00:00",
        "updateDate": "2023-02-14T00:00:00",
        "buildingId": 5,
        "number": "1",
        "floor": 2,
        "shapePath": "X4531-Y13457-Z8273"
    }
]`;

const mockFlatsList = JSON.parse(flatsJson) as Flat[];

export default mockFlatsList;
