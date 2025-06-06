import { useContext } from "react";
import { ReviewForm } from "./form/review-form";
import { ReviewsList } from "./reviews-list";
import { AuthContext } from "../../auth/auth-context";

export const Reviews = ({ reviews }) => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <h3>Rewiews</h3>
      <ReviewsList reviews={reviews} />
      {auth.isAuthorized && <ReviewForm />}
    </div>
  );
};
