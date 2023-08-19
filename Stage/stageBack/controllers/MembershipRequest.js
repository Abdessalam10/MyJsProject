const MembershipRequest = require("../models/MembershipRequest");

exports.createMembershipRequest = (req, res, next) => {
  const membershipRequest = new MembershipRequest({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
    number: req.body.number,
    image: req.body.image,
  });

  membershipRequest
    .save()
    .then(() =>
      res
        .status(201)
        .json({ message: "Membership Request created successfully." })
    )
    .catch((error) => {
      res.status(400).json({ message: "error" });
    });
};

exports.updateMembershipRequest = (req, res, next) => {
  MembershipRequest.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() =>
      res
        .status(200)
        .json({ message: "Membership Request updated successfully." })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.getMembershipRequests = (req, res, next) => {
  MembershipRequest.find()
    .then((membershipRequests) => res.status(200).json(membershipRequests))
    .catch((error) => res.status(500).json({ error }));
};

exports.getMembershipRequestById = (req, res, next) => {
  MembershipRequest.findById(req.params.id)
    .then((membershipRequest) => res.status(200).json(membershipRequest))
    .catch((error) => res.status(404).json({ error }));
};

exports.deleteMembershipRequest = (req, res, next) => {
  MembershipRequest.deleteOne({ _id: req.params.id })
    .then(() =>
      res
        .status(200)
        .json({ message: "Membership Request deleted successfully." })
    )
    .catch((error) => res.status(400).json({ error }));
};
