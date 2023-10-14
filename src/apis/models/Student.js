const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },

    student_id: {
      type: String,
      unique: true
    },

    personalDetails: { // personal Details ->
      first_name:
      {
        type: String,
        default: null
      },

      last_name: {
        type: String,
        default: null
      },

      fathersName: {
        type: String,
        default: null
      },

      dob: {
        type: String,
        default: null
      },

      email: {
        type: String,
        default: null
      },

      phone_number: {
        type: String,
        default: null
      },

      profileImage: {
        type: String,
        default: null
      },

      aboutUs: {
        type: String,
        default: null
      },

      secondaryMobileNumber: {
        type: String,
        default: null
      },

      address: {
        street: {
          type: String,
          default: null
        },

        city: {
          type: String,
          default: null
        },

        state: {
          type: String,
          default: null
        },

        postal_code: {
          type: String,
          default: null
        },

        country: {
          type: String,
          default: null
        },

        location: {
          longitude: {
            type: String,
            default: '0'
          },

          latitude: {
            type: String,
            default:
              '0'
          },

        },
      },
      guardians: [
        {
          first_name: {
            type: String,
            default: null
          },
          last_name: {
            type: String,
            default: null
          },
          relationship: {
            type: String,
            default: null
          },
          email: {
            type: String,
            default: null
          },
          phone_number: {
            type: String,
            default: null
          },
        },
      ],
    },

    educationDetails: {

      class: {
        type: String,
        default: null
      },

      Board: {
        type: String,
        default: null
      },

      prefferedSub: [{
        type: String,
        default: null
      }],

      lastClassPerformance: {
        type: String,
        default: null
      }

    },

    enrolled_batch: [
      {
        batch_id: String,
        batch_name: String,
        teacher_id: String,
      },
    ],

    teacher_id: [{
      teacher_id: String,
      subject: String,
      classes: String,
    }],

    req_status: [
      {
        tid: String,
        status: String, // accept or reject or request
        about: String,
        subject: String,
        classes: String,
        flag: Boolean,
      },
    ],

    ApplicationStatus: {
      isProfileCompleted: {
        type: Boolean,
        default: false
      },
      isEducationalDetailCompleted: {
        type: Boolean,
        default: false
      },
    },

    assignmentId: [String],

    isDeleted: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: String,
      default: null,
    },

    updatedBy: {
      type: String,
      default: null,
    },

    isDeleted: {
      type: Boolean,
      default: false
    },

    additional_info: {
      type: String,
      default: null
    },
  },

  { timestamps: { createdAt: true, updatedAt: true }, versionKey: false }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
