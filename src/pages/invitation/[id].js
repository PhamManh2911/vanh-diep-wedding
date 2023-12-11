import { appHostname } from "@/configs/app";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await (await fetch(`${appHostname}/api/users/${id}`)).json();

  return {
    props: { user: response.data.user }
  };
};

export default function Invitation({ user }) {
  return (
    <p>
      {`Invitation to user ${user.username}`}
    </p>
  )
}