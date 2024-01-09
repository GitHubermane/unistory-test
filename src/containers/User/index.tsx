import { Planet } from 'components';
import { useParams } from 'react-router-dom';
import { useGetUserbyIdQuery } from 'services/user';

export const User = () => {
  const { id } = useParams();

  const { data } = useGetUserbyIdQuery(Number(id));

  // Секции с информацией о пользователе
  const sections = [
    {
      title: 'Name',
      value: data?.username,
    },
    {
      title: 'Email',
      value: data?.email,
    },
    {
      title: 'Wallet',
      value: data?.address,
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="relative z-10">
        <h2 className="mt-24 mb-12 text-5xl font-bold">Personal data</h2>
        <div>
          {sections.map(({ title, value }) => (
            <div
              className="flex flex-col mb-5 font-bold"
              key={title}
            >
              <span className="mb-2 text-2xl ">{title}</span>
              <span className="text-3xl text-orange-light">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-52 -right-24">
        <Planet />
      </div>
    </div>
  );
};
