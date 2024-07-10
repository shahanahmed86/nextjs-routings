import { FC } from 'react';

type Props = {
	params: {
		slugs: Array<string>;
	};
};

const Docs: FC<Props> = ({ params }) => {
  if (params.slugs.length === 2) {
    return (
      <div>
        <h1>Viewing docs for feature {params.slugs[0]} and concept {params.slugs[1]}</h1>
      </div>
    )
  } else if (params.slugs.length === 1) {
    return (
      <div>
        <h1>Viewing docs for feature {params.slugs[0]}</h1>
      </div>
    )
  }
	return (
		<div>
			<h1>Docs home page</h1>
		</div>
	);
};

export default Docs;
