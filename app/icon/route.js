import { ImageResponse } from "@vercel/og";

// Route segment config
export const runtime = "edge";

// Image generation for GET request
export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const size = searchParams.get("size") || 32;

	const protocol = request.headers.get("x-forwarded-proto") || "http";
	const host =
		request.headers.get("x-forwarded-host") || request.headers.get("host");
	const absoluteUrl = `${protocol}://${host}/assets/icons/logo.png`;

	return new ImageResponse(
		(
			<div
				style={{
					background: "transparent",
					width: `${size}px`,
					height: `${size}px`,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img
					src={absoluteUrl}
					alt="Icon"
					width={size}
					height={size}
					style={{
						maxWidth: "100%",
						maxHeight: "100%",
					}}
				/>
			</div>
		),
		{
			width: parseInt(size, 10),
			height: parseInt(size, 10),
		}
	);
}
