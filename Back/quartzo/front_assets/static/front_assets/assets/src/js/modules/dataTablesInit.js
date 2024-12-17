export default function dataTablesInit() {
	document.querySelectorAll("table[js-dataTables]")
		?.forEach(t => {
			const props = t.dataset.props || {}

			const Dtable = $(t).DataTable({
				"language": {
					"show": "Visualizar",
					"lengthMenu": "Mostrar _MENU_ linhas por página",
					"zeroRecords": "Nada encontrado",
					"info": "Exibindo página _PAGE_ de _PAGES_",
					"infoEmpty": "Nada encontrado",
					"infoFiltered": "(filtrado de _MAX_ no total)",
					"search": "Pesquisar",
					"paginate": {
						"previous": "Anterior",
						"next": "Próxima"
					}
				},
				"autoWidth": true,
				"ordering": true,
				"order": [[0, "desc"]],
				// rowReorder: {
				//     selector: 'td:nth-child(2)'
				// },
				select: {
					items: 'cell'
				},
				responsive: true,
				paginate: false,
				search: false,
				info: false,
				...props

			})
			
			GLOBAL.wrap_single(t, "div", ["table-container"])
			// t.querySelectorAll("thead th")
			// 	?.forEach(t => t.addEventListener("click", () => {
			// 		Dtable.columns.adjust().draw();
			// 	}))

		})



}