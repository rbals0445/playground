import { IPhoto } from "../types/index";

interface IAlbumInfoTableProps {
  photoInfo: IPhoto[];
}

const tableHeaders = ["albumId", "id", "title", "url", "thumbnailUrl"];

function AlbumInfoTable({ photoInfo }: IAlbumInfoTableProps) {
  return (
    <>
      <button
        style={{ marginTop: "30px" }}
        onClick={() => alert("Download Clicked")}
      >
        Download
      </button>
      {/* table info */}
      <table style={{ marginTop: "30px" }} border={1}>
        <thead>
          <tr>
            {tableHeaders.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {photoInfo.map((elem, index) => (
            <tr key={index}>
              <td>{elem.albumId}</td>
              <td>{elem.id}</td>
              <td>{elem.title}</td>
              <td>{elem.url}</td>
              <td>{elem.thumbnailUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AlbumInfoTable;
