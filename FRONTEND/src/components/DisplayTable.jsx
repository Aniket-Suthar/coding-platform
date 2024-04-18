import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import CottageIcon from '@mui/icons-material/Cottage';

function CodingQuestionForm() {

    const navigateTo = useNavigate(); // Initialize useHistory

    // Function to handle "Practice" button click
    const handleHome = () => {
        // Navigate to the '/practice' route
        navigateTo('/');
    };
    const [questions, setQuestions] = useState([]);
    const [editingQuestion, setEditingQuestion] = useState(null);
    const [formData, setFormData] = useState({
        questionName: '',
        difficultyLevel: '',
        url: '',
        conceptType: ''
    });

    useEffect(() => {
        // Fetch data from the API endpoint
        const fetchData = async () => {
            try {
                const response = await axios.get('https://coding-platform-0r4n.onrender.com/api/getallquestion', { withCredentials: true });
                setQuestions(response.data); // Assuming response.data is an array of questions
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    const handleEdit = (question) => {
        console.log("Question: is", question)
        setEditingQuestion(question);
        setFormData(question); // Set formData directly to the editing question
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://coding-platform-0r4n.onrender.com/api/updatequestion/${editingQuestion._id}`, formData, { withCredentials: true });
            console.log('Question updated:', response.data);
            // Update the question in the state

            setQuestions(prevQuestions => prevQuestions.map(question => {
                if (question._id === editingQuestion._id) {
                    return { ...question, ...formData };
                }
                return question;
            }));
            // Clear editing state and form data
            setEditingQuestion(null);
            setFormData({
                questionName: '',
                difficultyLevel: '',
                url: '',
                conceptType: ''
            });
        } catch (error) {
            console.error('Error updating question:', error);
        }
    };

    const handleDelete = async (question) => {
        try {
            console.log(question);
            await axios.delete(`https://coding-platform-0r4n.onrender.com/api/deletequestion/${question._id}`, { withCredentials: true });
            // Remove the question from the state only after successful deletion
            setQuestions(prevQuestions => prevQuestions.filter(q => q._id !== question._id));
        } catch (error) {
            console.error('Error deleting question:', error);
        }
    };

    return (
        <>
            <a onClick={handleHome} className="absolute left-0" style={{ fontWeight: "bold", color: "white", marginTop: '1rem', fontSize: "2rem" }}><CottageIcon sx={{ fontSize: 50 }} style={{ marginLeft: '1rem' }} /> Personalized Questions</a>
            <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-900 to-black">
                <div className="max-w-7xl w-full bg-white bg-opacity-80 shadow-lg rounded-lg overflow-hidden p-6 text-gray-800">
                    <h2 className="text-center text-2xl font-semibold mb-6">Predefined Questions</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-3 px-4">Question Name</th>
                                    <th className="py-3 px-4">Difficulty Level</th>
                                    <th className="py-3 px-4">URL</th>
                                    <th className="py-3 px-4">Concept Type</th>
                                    <th className="py-3 px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map(question => (
                                    <tr key={question.id} className={`border-b border-gray-300 ${getColorClass(question.difficultyLevel)}`}>
                                        <td className="py-3 px-4 font-bold">{question.questionName}</td>
                                        <td className="py-3 px-4 font-bold">{question.difficultyLevel}</td>
                                        <td className="py-3 px-4 font-bold"><a href={question.url} className="text-blue-900 hover:underline">{question.url}</a></td>
                                        <td className="py-3 px-4 font-bold">{question.conceptType}</td>
                                        <td className="py-3 px-4">
                                            <button onClick={() => handleEdit(question)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 border-b border-black">Edit</button>
                                            <button onClick={() => handleDelete(question)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border-b border-black">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Edit form */}
                    {editingQuestion && (
                        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                                <h2 className="text-center text-xl font-semibold mb-4">Edit Question</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="questionName">
                                            Question Name
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                            id="questionName"
                                            type="text"
                                            placeholder="Question Name"
                                            value={formData.questionName}
                                            onChange={(e) => setFormData({ ...formData, questionName: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="difficultyLevel">
                                            Difficulty Level
                                        </label>
                                        <select
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                            id="difficultyLevel"
                                            value={formData.difficultyLevel}
                                            onChange={(e) => setFormData({ ...formData, difficultyLevel: e.target.value })}
                                        >
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                                            URL
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                            id="url"
                                            type="text"
                                            placeholder="URL"
                                            value={formData.url}
                                            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="conceptType">
                                            Concept Type
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                                            id="conceptType"
                                            type="text"
                                            placeholder="Concept Type"
                                            value={formData.conceptType}
                                            onChange={(e) => setFormData({ ...formData, conceptType: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

// Function to get color class based on difficulty level
const getColorClass = (difficultyLevel) => {
    switch (difficultyLevel) {
        case 'easy':
            return 'bg-green-500';
        case 'medium':
            return 'bg-yellow-500';
        case 'hard':
            return 'bg-red-500';
        default:
            return '';
    }
};

export default CodingQuestionForm;
