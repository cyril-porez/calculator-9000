import axios from 'axios'

async function postSave() {
    try {
        const response = await axios.post('../../../backend/save.php',
        )
    } catch {

    }
}

export default {
    postSave
}