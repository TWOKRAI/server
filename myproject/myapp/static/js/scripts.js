document.getElementById('setButton').addEventListener('click', function() {
    const form = document.getElementById('drinkForm');
    const formData = new FormData(form);
    formData.append('action', 'set_drinks');

    fetch("{% url 'index' %}", {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': '{{ csrf_token }}',
        },
    }).then(response => response.json()).then(data => {
        if (data.success) {
            alert('Настройки сохранены');
        } else {
            alert('Ошибка при сохранении настроек');
        }
    });
});

document.getElementById('toggleButton').addEventListener('click', function() {
    const form = document.getElementById('drinkForm');
    const formData = new FormData(form);
    formData.append('action', 'toggle_status');

    fetch("{% url 'index' %}", {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': '{{ csrf_token }}',
        },
    }).then(response => response.json()).then(data => {
        if (data.success) {
            document.getElementById('toggleButton').textContent = data.status ? 'Выключить' : 'Включить';
            document.getElementById('fillerStatus').textContent = data.status ? 'включен' : 'выключен';
        } else {
            alert('Ошибка при изменении состояния');
        }
    });
});