const tieba_template = data => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>贴吧帖子</title>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            .tieba-list {
                padding: 40px;
            }
            table {
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                    sans-serif;
                width: 100%;
                border-collapse: collapse;
            }
            th,td {
                text-align: left;
                padding: 10px;
                border: 1px solid #aaaaaa;
            }
            tr:nth-child(even) {
                background: #dedede;
            }
        </style>
    </head>
    <body>
        <div class="tieba-list">
            <h2>帖子数量：${data.length}个</h2>
            <table>
                <thead>
                    <tr>
                        <th>吧名</td>
                        <th>帖子</td>
                    </tr>
                </thead>
                <tbody>
                    ${data
                        .map(item => {
                            return ` <tr>
                                <td>${item.name}</td>
                                <td><a href="${item.link}" target="view_window">${item.title}</a></td>
                            </tr>`;
                        })
                        .join('')}
                </tbody>
            </table>
        </div>
    </body>
</html>
`;

module.exports = tieba_template;
