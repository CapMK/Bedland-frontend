// eslint-disable-next-line import/no-extraneous-dependencies
import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
} from 'msw';
import { BASE_URL } from 'utils/constans';
import { mockUserCredentials } from 'utils/mockUser';
import mockResidentList from 'utils/mockResident';

export const mockLoginResponse = (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { login, password } = req.params;
  if (login === 'testmember' && password === '!Test123!') {
    return res(
      ctx.status(200),
      ctx.json({
        id: 8,
        login: 'testmanager',
        password: '!Test123!',
        name: 'Jack',
        lastName: 'Sparrow',
        email: 'jackx@email.com',
        phoneNumber: '213721372',
        role: 'manager',
      }),
    );
  }
  return res(ctx.status(403), ctx.json({ error: 'wrong login or password' }));
};
export const mockLogoutResponse = (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => res(ctx.status(200));
const mockResidentLoginResponse = (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { login, password } = req.params;
  if (login === mockUserCredentials.residentUsername && password === mockUserCredentials.password) {
    res(
      ctx.status(200),
      ctx.json({
        data: {
          message: 'You are logged in!',
        },
        token: 'Bearer token',
        id: 6,
        login: mockUserCredentials.residentUsername,
        role: 'resident',
      }),
    );
  }
  return res(ctx.status(403), ctx.json({ error: 'wrong login or password' }));
};
const mockManagerLoginResponse = (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { login, password } = req.params;
  if (login === mockUserCredentials.managerUsername && password === mockUserCredentials.password) {
    res(
      ctx.status(200),
      ctx.json({
        data: {
          message: 'You are logged in!',
        },
        token: 'Bearer token',
        id: 6,
        login: mockUserCredentials.managerUsername,
        role: 'manager',
      }),
    );
  }
  return res(ctx.status(403), ctx.json({ error: 'wrong login or password' }));
};
const mockResidentDetailsResponse = (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { login, password } = req.params;
  if (login === mockUserCredentials.residentUsername && password === mockUserCredentials.password) {
    res(
      ctx.status(200),
      ctx.json({
        id: 6,
        login: mockUserCredentials.residentUsername,
        password: '!Test123!',
        name: 'Jack',
        lastName: 'Sparrow',
        email: 'jackx@email.com',
        phoneNumber: '213721372',
        role: 'resident',
        flatId: 4,
        owner: false,
      }),
    );
  }
  return res(ctx.status(403), ctx.json({ error: 'wrong login or password' }));
};
const mockManagerDetailsResponse = (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { login, password } = req.params;
  if (login === mockUserCredentials.managerUsername && password === mockUserCredentials.password) {
    res(
      ctx.status(200),
      ctx.json({
        id: 6,
        login: mockUserCredentials.managerUsername,
        password: '!Test123!',
        name: 'Jack',
        lastName: 'Sparrow',
        email: 'jackx@email.com',
        phoneNumber: '213721372',
        role: 'manager',
        flatId: 4,
        owner: false,
      }),
    );
  }
  return res(ctx.status(403), ctx.json({ error: 'wrong login or password' }));
};
const mockAllFlastForBuildingResponse = (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const flats = [
    {
      id: 1,
      version: 1,
      buildingId: 1,
      number: 'fakeFlatNumber',
      floor: 1,
      shapePath: 'fakeShapePath',
    },
    {
      id: 2,
      version: 2,
      buildingId: 2,
      number: 'fakeFlatNumber',
      floor: 2,
      shapePath: 'fakeShapePath',
    },
    {
      id: 3,
      version: 3,
      buildingId: 3,
      number: 'fakeFlatNumber',
      floor: 3,
      shapePath: 'fakeShapePath',
    },
  ];
  return res(ctx.status(200), ctx.json(flats));
};
const mockFlatForBuildingByIdResponse = (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const flat = {
    id: 1,
    version: 1,
    buildingId: 1,
    number: 'fakeFlatNumber',
    floor: 1,
    shapePath: 'fakeShapePath',
  };
  return res(ctx.status(200), ctx.json(flat));
};

const mockGetAllResidentsResponse = (
  _req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => res(ctx.status(200), ctx.json(mockResidentList));

const mockGetResidentById = (
  req: RestRequest<DefaultBodyType, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const { id } = req.params;
  const resident = mockResidentList.find((resi) => resi.id.toString() === id);

  if (resident) {
    return res(ctx.status(200), ctx.json(resident));
  }
  return res(ctx.status(404), ctx.json({}));
};

const handlers = [
  rest.post(`${BASE_URL}/manager/login`, mockManagerLoginResponse),
  rest.post(`${BASE_URL}/manager/6`, mockManagerDetailsResponse),
  rest.post(`${BASE_URL}/member/login`, mockResidentLoginResponse),
  rest.post(`${BASE_URL}/member/6`, mockResidentDetailsResponse),
  rest.post(`${BASE_URL}/member/logout`, mockLogoutResponse),
  rest.post(`${BASE_URL}/manager/logout`, mockLogoutResponse),
  rest.get(`${BASE_URL}/flat/:buildingId`, mockAllFlastForBuildingResponse),
  rest.get(`${BASE_URL}/flat/:buildingId/:flatId`, mockFlatForBuildingByIdResponse),
  rest.get(`${BASE_URL}/member`, mockGetAllResidentsResponse),
  rest.get(`${BASE_URL}/member/:id`, mockGetResidentById),
];

export default handlers;
