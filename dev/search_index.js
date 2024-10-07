var documenterSearchIndex = {"docs":
[{"location":"usage/visualization/#Loading-and-visualizing-paths","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"","category":"section"},{"location":"usage/visualization/#Loading-paths","page":"Loading and visualizing paths","title":"Loading paths","text":"","category":"section"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"To load paths saved by the find_orbits function, use the read_path_from_file function. This function receives a single argument, filename, which is a String that indicates the path to the file where the path has been saved by the find_orbits function.","category":"page"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"Note that it outputs a Problem object and a Path object.","category":"page"},{"location":"usage/visualization/#Example","page":"Loading and visualizing paths","title":"Example","text":"","category":"section"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"using SymPath # hide\nP, Γ = read_path_from_file(\"7.4797.toml\") ","category":"page"},{"location":"usage/visualization/#Orbits-visualization","page":"Loading and visualizing paths","title":"Orbits visualization","text":"","category":"section"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"To visualize orbits, use the path_animation function. ","category":"page"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"note: Note\nThe path_animation function uses the GLMakie.jl package to create the animation. Therefore, you need to install it by typing the following command in the Package Manager:] add GLMakieNote that this package must be explicitly loaded before using the path_animation function.","category":"page"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"The path_animation function receives the following arguments: -P: A Problem object.","category":"page"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"Γ: A Path object.","category":"page"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"or  -filename: A String that indicates the path to the file where the path has been saved by the find_orbits function.","category":"page"},{"location":"usage/visualization/#Example-2","page":"Loading and visualizing paths","title":"Example","text":"","category":"section"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"path_animation(P, Γ)","category":"page"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"Or, if you want to load the path directly from the file:","category":"page"},{"location":"usage/visualization/","page":"Loading and visualizing paths","title":"Loading and visualizing paths","text":"path_animation(\"7.4797.toml\")","category":"page"},{"location":"usage/new_orbit/#Find-new-orbits","page":"Find new orbits","title":"Find new orbits","text":"","category":"section"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"To find new orbits, first initialize a problem using the initialize function (see Problem definition). Then, use the find_orbits function to find new orbits. ","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"The find_orbits function receives the following arguments:","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"P: A Problem object.\nmethod: An optimization method. It must be a subtype of AbstractMethod. See below for more information.\nnumber_of_orbits: The number of orbits to be found. Default is 1. If number_of_orbits = Inf, the function will continue to search for orbits until it is stopped by the user.\nstarting_path_type: a Symbol that indicates the type of the starting path. Default is :random. See below for more information.\nstarting_path: a Path object that indicates the starting path. Default is nothing. If starting_path is provided, starting_path_type is ignored.\nprint_path: a Bool that indicates if the path should be printed. Default is true. The filename is the value of the action.\nprint_path_folder: a String that indicates the folder where the path should be printed. Default is \"./\" (the current folder).","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"Any additional keyword arguments are passed to the optimization method. For example, when using a CompoundMethod, you can pass the keyword max_iterations in order to specify the maximum number of times the first and second methods are executed.","category":"page"},{"location":"usage/new_orbit/#Methods","page":"Find new orbits","title":"Methods","text":"","category":"section"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"To specify an optimization method, you can combine multiple AtomicMethods. The available atomic methods are:","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"First Order Methods: \nBFGS(): BFGS method.\nConjugateGradient(): Conjugate gradient method.\nGradientDescent(): Gradient descent method.\nSecond Order Methods:\nNewton(): Newton method.    ","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"Every atomic method accepts the following options:","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"max_iter: Maximum number of iterations. Default is 200.\ntolerance: Tolerance on the gradient norm for the stopping criterion. Default is 1e-8.","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"You can combine them using the following constructors:","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"OneMethod(method): Use a single method.\nInitMinimizeMethod(init, method): Use an initialization method and then a minimization method.\nCompoundMethod(init, first, second): Use a compound method. The init method is executed first. Then the first and second methods are executed repetedly until the stopping criterion is met.","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"The following are valid examples of method combinations:","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"OneMethod(BFGS()): Use the BFGS method with 200 iterations and a tolerance of 1e-8 (default options)\nOneMethod(Newton(400)): Use the Newton method with 400 iterations (custom) and a tolerance of 1e-8 (default)\nInitMinimizeMethod(ConjugateGradient(10), BFGS()): Use the Conjugate Gradient method with 10 iterations (custom) and then the BFGS method with 200 iterations and a tolerance of 1e-8 (default)\nCompoundMethod(BFGS(5), Newton(300), BFGS(10)): Use the BFGS method with 5 iterations (custom) to initialize, then the Newton method with 300 iterations (custom) and finally the BFGS method with 10 iterations and a tolerance of 1e-8 (default). The last two methods are executed repeatedly until the stopping criterion is met.","category":"page"},{"location":"usage/new_orbit/#Starting-Path-Type","page":"Find new orbits","title":"Starting Path Type","text":"","category":"section"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"The starting_path_type argument can be one of the following:","category":"page"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":":random: A random path.\n:circular: A circular path.\n:perturbed_circular: A circular path with a small perturbation.","category":"page"},{"location":"usage/new_orbit/#Example","page":"Find new orbits","title":"Example","text":"","category":"section"},{"location":"usage/new_orbit/","page":"Find new orbits","title":"Find new orbits","text":"using SymPath; P = initialize(\"example.toml\") # hide\nresult = find_orbits(P, OneMethod(BFGS()), number_of_orbits=1)","category":"page"},{"location":"APIs/#APIs","page":"APIs","title":"APIs","text":"","category":"section"},{"location":"APIs/#Types","page":"APIs","title":"Types","text":"","category":"section"},{"location":"APIs/","page":"APIs","title":"APIs","text":"Modules = [SymPath]\nPages = [\"types.jl\"]","category":"page"},{"location":"APIs/#SymPath.ActionType","page":"APIs","title":"SymPath.ActionType","text":"The type of the action can by Cyclic, Dihedral or Brake \n\n\n\n\n\n","category":"type"},{"location":"APIs/#SymPath.CompoundMethod","page":"APIs","title":"SymPath.CompoundMethod","text":"CompoundMethod{M <: AbstrAtomicOrNothing, N <: AbstrAtomicOrNothing, O <: AbstrAtomicOrNothing}\n\nA minimization method that combines up to three atomic minimization methods\n\n\n\n\n\n","category":"type"},{"location":"APIs/#SymPath.GroupElement","page":"APIs","title":"SymPath.GroupElement","text":"A group element of the symmetry group\n\nFields\n\nσ::Permutation: The permutation of the particles\nM::Rotation: The rotation of the particles\n\n\n\n\n\n","category":"type"},{"location":"APIs/#SymPath.GroupElement-Tuple{GAP.GapObj}","page":"APIs","title":"SymPath.GroupElement","text":"GroupElement(el)::GroupElement\n\nCreate a GroupElement from the GAP result.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.MinimizationResult","page":"APIs","title":"SymPath.MinimizationResult","text":"MinimizationResult{T <: AbstractMethod}\n\nThe result of a minimization\n\nFields\n\ninitial::Vector: The initial path\nfourier_coeff::Vector: The Fourier coefficients of the minimization result\ngradient_norm::Float64: The norm of the gradient at the minimum\naction_value::Float64: The value of the action at the minimum\nconverged::Bool: Whether the minimization converged\nmethod::T: The minimization method used\n\n\n\n\n\n","category":"type"},{"location":"APIs/#SymPath.Problem","page":"APIs","title":"SymPath.Problem","text":"The minimization problem to be solved\n\nFields\n\nN::Int: The number of particles\ndim::Int: The dimension of the space\nF::Int: The number of Fourier series terms\nsteps::Int: The number of steps in the discretization of time [0,π]\nG::SymmetryGroup: The symmetry group of the minimization problem\nm::Vector{Float64}: The masses of the particles\nf::M: The denominator of the potential\nf_raw::String: The string representation of f\nK::Matrix{Float64}: The kinetic energy matrix\ndx_dA::Matrix{Float64}: The derivative of the path w.r.t. the Fourier coefficients\ndA_dx::Matrix{Float64}: The derivative of the Fourier coefficients w.r.t. the path\nA_to_x::Matrix{Float64}: The transformation matrix from Fourier coefficients to path\nx_to_A::Matrix{Float64}: The transformation matrix from path to Fourier coefficients\nΠ::Matrix{Float64}: The projection matrix\nR::Matrix{Float64}: The matrix that reconstructs the nth body\nRi::Matrix{Float64}: The matrix that removes the nth body\nI_factors::Vector{Float64}: The integration factors\n\n\n\n\n\n","category":"type"},{"location":"APIs/#SymPath.SymmetryGroup","page":"APIs","title":"SymPath.SymmetryGroup","text":"The symmetry group of the minimization problem\n\nFields\n\naction_type::ActionType: The type of the action\nkerT::Vector{GroupElement}: The kernel of τ, the action on O(2)\ng::Vector{GroupElement}: The elements of the cyclic part of the symmetry group\nH0::GroupElement: If the action is dihedral or brake, it's the generator of the first isotropy subspaces\nH1::GroupElement: If the action is dihedral or brake, it's the generator of the second isotropy subspaces\n\n\n\n\n\n","category":"type"},{"location":"APIs/#Base.show-Tuple{IO, MIME{Symbol(\"text/plain\")}, SymPath.AbstractMethod}","page":"APIs","title":"Base.show","text":"Base.show(io::IO, method::AbstractAtomicMethod)\n\nPretty-print the minimization method in a more detailed way\n\n\n\n\n\n","category":"method"},{"location":"APIs/#Base.show-Tuple{IO, MinimizationResult}","page":"APIs","title":"Base.show","text":" Base.show(io::IO, result::MinimizationResult)\n\nPretty-print the minimization result\n\n\n\n\n\n","category":"method"},{"location":"APIs/#Base.show-Tuple{IO, SymPath.AbstractCompoundMethod}","page":"APIs","title":"Base.show","text":"Base.show(io::IO, method::AbstractCompoundMethod)\nBase.show(io::IO, ::MIME\"text/plain\", method::AbstractCompoundMethod)\n\nPretty-print the compound minimization method\n\n\n\n\n\n","category":"method"},{"location":"APIs/#Base.show-Tuple{IO, SymPath.AbstractMethod}","page":"APIs","title":"Base.show","text":"Base.show(io::IO, method::AbstractMethod)\n\nPretty-print the minimization method in a concise way\n\n\n\n\n\n","category":"method"},{"location":"APIs/#Base.show-Tuple{IO, SymPath.Problem}","page":"APIs","title":"Base.show","text":"Base.show(io::IO, P::Problem)\n\nPretty-print the minimization problem\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.@atomic_method-Tuple{Any, Any, Any}","page":"APIs","title":"SymPath.@atomic_method","text":"atomic_method(type, struct_name, f_name)\n\nDefine a new atomic minimization method with the given type, struct_name and f_name.  \n\n\n\n\n\n","category":"macro"},{"location":"APIs/#Problem-definition-and-minimization","page":"APIs","title":"Problem definition and minimization","text":"","category":"section"},{"location":"APIs/","page":"APIs","title":"APIs","text":"Modules = [SymPath]\nPages = [\"initialize.jl\", \"minimization.jl\"]","category":"page"},{"location":"APIs/#SymPath.initialize-Tuple{Dict}","page":"APIs","title":"SymPath.initialize","text":"initialize(data::Dict)::Problem\ninitialize(filename::String)::Problem\n\nInitialize the problem with the data given in the dictionary data or in the file filename.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.find_orbits","page":"APIs","title":"SymPath.find_orbits","text":"find_orbits(P::Problem, method::AbstractMethod=OneMethod(BFGS());; starting_path_type::Symbol=:random, starting_path::Union{Path,Nothing}=nothing, show_steps=true, print_path=true,  print_path_folder::String=\"/.\", options...)\n\nFind number_of_orbits orbits using the given method and starting path. \n\nArguments\n\nmethod::AbstractMethod=OneMethod(BFGS()): the minimization method to use. Defaults to BFGS for 200 steps.\nnumber_of_orbits=Inf: the number of orbits to find. Defaults to infinity.\n\nKeyword Arguments\n\nstarting_path_type::Symbol=:random: the type of starting path to use\nstarting_path::Union{Path,Nothing}=nothing: the starting path to use. If provided, starting_path_type is ignored\nshow_steps::Bool=true: whether to show the steps of the minimization.\nprint_path::Bool=true: whether to print the path to a file.\nprint_path_folder::String=\"./\": the folder where to print the path.\noptions...: additional options to pass to the optimization method.\n\n\n\n\n\n","category":"function"},{"location":"APIs/#SymPath.new_orbit-Tuple{Any, Vector, CompoundMethod}","page":"APIs","title":"SymPath.new_orbit","text":"new_orbit(p::Problem, starting_path::Vector, method::CompoundMethod; max_repetitions::Int=10, perturb::Bool=false, perturbation::Float64=1e-3, action_threshold::Float64=2.0, show_steps=true)::MinimizationResult\n\nFind a new orbit using the given CompoundMethod and starting path. \n\nIt first executes the init method. Then it alternates the first method and the second method until the minimization converges, the action is below action_threshold or the maximum number of repetitions is reached.\n\nTo implement new optimization algorithms, define new methods for this function.  New methods must accept 2 arguments, the starting path and the method to use, and a keyword argument show_steps. They must return a MinimizationResult.\n\nKeyword Arguments\n\nmax_repetitions::Int=10: how many times to minimize using first and second method\nperturb::Bool=false: whether to perturb the path if minimization fails \nperturbation::Float64=1e-3: the strength of the perturbation to apply to the path\naction_threshold::Float64=2.0: the threshold for the action value above which to continue minimization\nshow_steps::Bool=true: whether to show the steps of the minimization\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.perform_optimization-Tuple{SymPath.Problem, Vector, SymPath.NLSolveMethod}","page":"APIs","title":"SymPath.perform_optimization","text":"perform_optimization(P::Problem, Γ0::Vector, method::NLSolveMethod)::Tuple{Vector, Int, Bool}\nperform_optimization(P::Problem, Γ0::Vector, method::OptimMethod)::Tuple{Vector, Int, Bool}\n\nWrappers around the minimization libraries\n\n\n\n\n\n","category":"method"},{"location":"APIs/#Action-computation","page":"APIs","title":"Action computation","text":"","category":"section"},{"location":"APIs/","page":"APIs","title":"APIs","text":"Modules = [SymPath]\nPages = [\"action.jl\"]","category":"page"},{"location":"APIs/#SymPath.HU-Union{Tuple{T}, Tuple{SymPath.Problem, Array{T, 3}}} where T","page":"APIs","title":"SymPath.HU","text":"HU(Γ::Coefficients, [n::Int = steps+1])::AbstractMatrix\n\nCompute the hessian of the potential at every time step along the path x\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.HU_t!-Union{Tuple{T}, Tuple{AbstractArray{T, 4}, AbstractMatrix{T}, Vector, Function, Function, Function}} where T","page":"APIs","title":"SymPath.HU_t!","text":"HU_t!(hessian::AbstractArray{T, 4},  x::AbstractArray{T, 2}, m::Vector, f::Function, df::Function, d2f::Function) where T\n\nCompute the hessian of the potential for the configuration x. The hessian is stored in the array hessian.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.Haction-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.Haction","text":"Haction(p::Problem, Γ::Vector{T})::Matrix{T}\n\nCompute the Hessian of the constrained action for a given configuration Γ.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.Hkinetic-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.Hkinetic","text":"Hkinetic(Γ::Coefficients)::AbstractMatrix\n\nCompute the Hessian of the kinetic part of the action for a given configuration Γ.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.Hpotential-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.Hpotential","text":"Hpotential(p::Problem, Γ::Vector{T})\n\nCompute the Hessian of the potential part of the action for a given configuration Γ.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.K_energy-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}, Int64}} where T","page":"APIs","title":"SymPath.K_energy","text":"K_energy(P::Problem, Γ::Vector{T}, n::Int)::Vector{T}\n\nCompute the kinetic energy for a given configuration Γ over n points along the path.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.U-Union{Tuple{T}, Tuple{Any, Array{T, 3}}} where T","page":"APIs","title":"SymPath.U","text":"U(P, x::Array{T, 3})::Vector{T}\n\nCompute the potential at every time step along the path x.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.U_t-Union{Tuple{T}, Tuple{AbstractMatrix{T}, Vector, Function}} where T","page":"APIs","title":"SymPath.U_t","text":"U(P, x::Array{T, 3})::Vector{T}\n\nCompute the potential for the configuration x (fixed-time potential).\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.kinetic-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.kinetic","text":"kinetic(p::Problem, Γ::Vector{T})::T\n\nCompute the kinetic part of the action for a given configuration Γ.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.potential-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.potential","text":"potential(p::Problem, Γ::Vector{T})::T\n\nCompute the potential part of the action for a given configuration Γ.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.∇U-Union{Tuple{T}, Tuple{SymPath.Problem, Array{T, 3}}} where T","page":"APIs","title":"SymPath.∇U","text":"∇U(Γ::Coefficients, [n::Int = steps+1])::AbstractVector\n\nCompute the gradient of the potential at every time step along the path x.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.∇U_t!-Union{Tuple{T}, Tuple{AbstractMatrix{T}, AbstractMatrix{T}, Vector, Function, Function}} where T","page":"APIs","title":"SymPath.∇U_t!","text":"∇U_t!(grad::AbstractArray{T, 2}, x::AbstractArray{T, 2}, m::Vector, f::Function, df::Function) where T\n\nCompute the gradient of the potential for the configurationx. The gradient is stored in the array grad.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.∇action-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.∇action","text":"∇action(p::Problem, Γ::Vector{T})::Vector{T}\n\nCompute the gradient of the constrained action for a given configuration Γ.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.∇kinetic-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.∇kinetic","text":"∇kinetic(p::Problem, Γ::Vector{T})::Vector{T}\n\nCompute the gradient of the kinetic part of the action for a given configuration Γ.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.∇potential-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.∇potential","text":"∇potential(p::Problem, Γ::Vector{T})::Vector{T}\n\nCompute the gradient of the potential part of the action for a given configuration Γ.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#Projectors-and-operators","page":"APIs","title":"Projectors and operators","text":"","category":"section"},{"location":"APIs/","page":"APIs","title":"APIs","text":"Modules = [SymPath]\nPages = [\"projectors.jl, matrices.jl\"]","category":"page"},{"location":"APIs/#Paths","page":"APIs","title":"Paths","text":"","category":"section"},{"location":"APIs/","page":"APIs","title":"APIs","text":"Modules = [SymPath]\nPages = [\"path.jl\"]","category":"page"},{"location":"APIs/#SymPath.build_path-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.build_path","text":"build_path(P::Problem, Γ::Vector{T})::Array{T, 3}\nbuild_path(P::Problem, Γ::Vector{T}, steps::Int64)::Array{T, 3}\n\nBuild the path from the Fourier coefficients Γ. If steps is provided, the path is built with steps steps. NOTE: If steps is provided, the function will compute the Jacobian of the path in terms of the Fourier coefficients. Otherwise, it will use the precomputed Jacobian.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.circular_starting_path-Tuple{SymPath.Problem}","page":"APIs","title":"SymPath.circular_starting_path","text":"circular_starting_path(dimensions)::Vector\n\nGenerate a circular starting path for the minimization problem.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.extend_to_period-Union{Tuple{T}, Tuple{SymPath.Problem, Array{T, 3}}} where T<:Real","page":"APIs","title":"SymPath.extend_to_period","text":"extend_to_period(P::Problem, x::Array{T, 3})::Array{T, 3}\n\nExtend the path x form the fundamental domain I = [0, π] to a full period.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.extend_to_period-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}} where T","page":"APIs","title":"SymPath.extend_to_period","text":"extend_to_period(P::Problem, f::T)::Array{T, 3}\n\nExtend the function f form the fundamental domain I = [0, π] to a full period.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.fourier_coefficients-Union{Tuple{T}, Tuple{SymPath.Problem, Array{T, 3}}} where T","page":"APIs","title":"SymPath.fourier_coefficients","text":"fourier_coefficients(P::Problem, x::Array{T, 3})::Vector{T}\n\nCompute the Fourier coefficients of the path x.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.get_starting_path-Tuple{SymPath.Problem, Symbol}","page":"APIs","title":"SymPath.get_starting_path","text":"get_starting_path(path_type::Symbol, dimensions)::Vector\n\nGenerate the starting path for the minimization problem according to the given path_type.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.perturbe_path-Union{Tuple{T}, Tuple{SymPath.Problem, Vector{T}}, Tuple{SymPath.Problem, Vector{T}, Any}} where T","page":"APIs","title":"SymPath.perturbe_path","text":"perturbe_path(Γ::Vector{T}, dims::NTuple{3, Int64}, λ=0.001)::Vector{T}\n\nPerturb the given path Γby a factorλ`.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.perturbed_circular_starting_path","page":"APIs","title":"SymPath.perturbed_circular_starting_path","text":"perturbed_circular_starting_path(dimensions, λ::Float64=0.001)::Vector\n\nGenerate a perturbed circular starting path for the minimization problem.\n\n\n\n\n\n","category":"function"},{"location":"APIs/#SymPath.print_path_to_file-Tuple{Any, Any, Any}","page":"APIs","title":"SymPath.print_path_to_file","text":"printpathto_file(P::Problem, Γ::Vector, filename::String)::Nothing\n\nPrint the information about P and the Fourier coefficients of the path Γ to the file named filename.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.random_starting_path-Tuple{SymPath.Problem}","page":"APIs","title":"SymPath.random_starting_path","text":"random_starting_path(dimensions::NTuple{3, Int64})::Vector\n\nGenerate a random starting path for the minimization problem.\n\n\n\n\n\n","category":"method"},{"location":"APIs/#SymPath.read_path_from_file-Tuple{String}","page":"APIs","title":"SymPath.read_path_from_file","text":"read_path_from_file(filename::String)::Tuple{Problem, Vector}\n\nRead the Fourier coefficients of a path  and the problem configuration from the file named filename.\n\n\n\n\n\n","category":"method"},{"location":"usage/problem_definition/#Definition-of-the-problem","page":"Definition of the problem","title":"Definition of the problem","text":"","category":"section"},{"location":"usage/problem_definition/","page":"Definition of the problem","title":"Definition of the problem","text":"The problem is defined in a TOML file. The file must contain the following fields:","category":"page"},{"location":"usage/problem_definition/","page":"Definition of the problem","title":"Definition of the problem","text":"symmetry_name: Name of the symmetry group.\nNOB: Number of bodies.\nm: An array of masses of the bodies.\ndim: The dimension of the space.\nGroup generators\naction_type: The type of the action of the group. It can be \n0: Circular action\n1: Dihedral action\n2: Brake action\nkern: A string containing a GAP command to generate the kernel of the tau representation. The following helper functions ara available: \nTrivialKerTau(2) for the trivial kernel of the tau representation when d=2\nTrivialKerTau(3) for the trivial kernel of the tau representation when d=3\nrotV: A string containing a GAP command to generate the O(d) part of the first generator of the group. It must be an orthogonal matrix of size d times d\nrotS: A string containing a GAP command to generate the Sigma_n part of the first generator of the group. It must be a permutation.\nIf the action is dihedral or brake:\nrefV: A string containing a GAP command to generate the O(d) part of the second generator of the group. It must be an orthogonal matrix of size d times d\nrefS: A string containing a GAP command to generate the Sigma_n part of the second generator of the group. It must be a permutation.","category":"page"},{"location":"usage/problem_definition/","page":"Definition of the problem","title":"Definition of the problem","text":"The file must also contain the following optional fields:","category":"page"},{"location":"usage/problem_definition/","page":"Definition of the problem","title":"Definition of the problem","text":"F: The number of fourier coefficients (default: 24)\nsteps: The number of steps to be used for the point representation of the path (default: 2 * F)\nOmega: The infinitesimal generator of the reference frame rotation (default: 0)\ndenominator: The denominator of the potential (default: x)","category":"page"},{"location":"usage/problem_definition/","page":"Definition of the problem","title":"Definition of the problem","text":"The following is an example of a TOML file defining a problem:","category":"page"},{"location":"usage/problem_definition/","page":"Definition of the problem","title":"Definition of the problem","text":"symmetry_name = \"2d_cyclic_2\"\nNOB = 3\ndim = 2\nm = [1, 1, 1]\n\n# Group generators\nkern = \"TrivialKerTau(2)\"\naction_type = 0\nrotV = \"[[-1, 0], [0, -1] ]\"\nrotS = \"(2,3)\"\n\n# Other configs\nF = 24\nOmega = [\n    [0, 0],\n    [0, 0]\n]\n","category":"page"},{"location":"usage/problem_definition/#Load-the-problem","page":"Definition of the problem","title":"Load the problem","text":"","category":"section"},{"location":"usage/problem_definition/","page":"Definition of the problem","title":"Definition of the problem","text":"A problem can be loaded using the initialize function. The function receives the path to the TOML file and returns a Problem object.","category":"page"},{"location":"usage/problem_definition/","page":"Definition of the problem","title":"Definition of the problem","text":"using SymPath # hide\nP = initialize(\"example.toml\")","category":"page"},{"location":"installation/#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"warning: Warning\nSymPath uses, to interface to the GAP package symorb, the package GAP.jl that is not supported on Windows. However, you can still use SymPath on Windows by using Windows Subsystem for Linux (WSL). [1]","category":"page"},{"location":"installation/#Step-0:-Install-and-configure-WSL-(Windows-only)","page":"Installation","title":"Step 0: Install and configure WSL (Windows only)","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"info: Info\nA complete guide WSL and its installation can be found here. ","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Type the  following command in the Powershell to install WSL and Ubuntu.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"$ wsl --install","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Then, Open a Bash shell (for instance, opening the Ubuntu app from the Start menu). Follow the instructions to set up your user account by choosing a username and password.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Finally, to enable orbits visualisation, you need to install OpenGL [2]","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"If you run Windows 11, it is sufficient to install mesa-utils by typing in the Bash shell:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"$ sudo apt install mesa-utils","category":"page"},{"location":"installation/#Step-1:-Install-Julia-(all-platforms)","page":"Installation","title":"Step 1: Install Julia (all platforms)","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"According to the Julia official documentation, it is strongly advised to install Julia using juliaup instead of using the distribution's package manager and binaries (see here)","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Open a shell and type the following command to install juliaup:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"$ curl -fsSL https://install.julialang.org | sh -s -- -y","category":"page"},{"location":"installation/#Step-2:-Install-SymPath-(all-platforms)","page":"Installation","title":"Step 2: Install SymPath (all platforms)","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"info: Info\nSymPath.jl is not yet registered in the Julia General registry. Therefore, you need to install it directly from the GitHub repository.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"In the following, it is assumed that you want to create a new project where you will use SymPath. If you want to install SymPath in an existing project, you can skip the first two steps.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Julia projects are simply directories that contain a Project.toml file. ","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Hence, first of all, create a new directory. If you are using Windows, make sure to create it in the WSL Linux file system. (The Linux file system can be accessed through File Explorer as a directory listed in the left sidebar. It is advised to create your documents in the home directory located at /home/your_username.)","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Then, to generate the required Project.toml and Manifest.toml files, open a Bash shell in that directory and launch the Julia REPL by typing julia --project and pressing Enter.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"To install SymPath, you need to access the Julia package manager by typing ]. You will notice that the prompt changes to (v1.xx) pkg>. Then, type the following command and press Enter:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"(v1.xx) pkg> add https://github.com/susorb/SymPath.jl","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"To exit the package manager, simply press Backspace to return to the Julia REPL.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"To check that SymPath has been correctly installed, type the following command in the Julia REPL:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"using SymPath","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"If no error message is displayed, then SymPath has been correctly installed.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"[1]: [https://learn.microsoft.com/en-us/windows/wsl/install]","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"[2]: https://gist.github.com/Mluckydwyer/8df7782b1a6a040e5d01305222149f3c","category":"page"},{"location":"#Index","page":"Index","title":"Index","text":"","category":"section"}]
}
