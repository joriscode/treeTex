/** @constructor */
ScalaJS.c.scala_util_automata_SubsetConstruction = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.nfa$1 = null
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.constructor = ScalaJS.c.scala_util_automata_SubsetConstruction;
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.nfa__Lscala_util_automata_NondetWordAutom = (function() {
  return this.nfa$1
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.selectTag__Lscala_collection_immutable_BitSet__AI__I = (function(Q, finals) {
  return ScalaJS.uI(ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.as.scala_collection_TraversableLike(Q.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(finals), ScalaJS.modules.scala_collection_immutable_BitSet().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).filter__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      x$1 = ScalaJS.uI(x$1);
      return ScalaJS.bZ((x$1 > 0))
    })
  })()))).min__Lscala_math_Ordering__O(ScalaJS.modules.scala_math_Ordering$Int()))
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.determinize__Lscala_util_automata_DetWordAutom = (function() {
  var indexMap = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.as.scala_collection_Map(ScalaJS.modules.scala_collection_Map().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil())));
  var invIndexMap = ScalaJS.as.scala_collection_Map(ScalaJS.modules.scala_collection_Map().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil()));
  var ix = 0;
  var q0 = ScalaJS.as.scala_collection_immutable_BitSet(ScalaJS.modules.scala_collection_immutable_BitSet().apply__Lscala_collection_Seq__Lscala_collection_BitSet(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), [0]))));
  var sink = ScalaJS.modules.scala_collection_immutable_BitSet().empty__Lscala_collection_immutable_BitSet();
  var states = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_BitSet.getArrayOf(), [q0, sink]), 1)))));
  var delta = new ScalaJS.c.scala_collection_mutable_HashMap().init___();
  var deftrans = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.as.scala_collection_mutable_Map(ScalaJS.modules.scala_collection_mutable_Map().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(q0), sink), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(sink), sink)]), 1)))));
  var finals = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.as.scala_collection_mutable_Map(ScalaJS.modules.scala_collection_mutable_Map().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil())));
  var rest = new ScalaJS.c.scala_collection_mutable_Stack().init___();
  rest.push__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Stack(sink, q0, ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_BitSet.getArrayOf(), []), 1)));
  this.addFinal$1__p1__Lscala_collection_immutable_BitSet__Lscala_runtime_ObjectRef__V(q0, finals);
  while ((!rest.isEmpty__Z())) {
    var P = ScalaJS.as.scala_collection_immutable_BitSet(rest.pop__O());
    indexMap.elem$1 = ScalaJS.as.scala_collection_Map(indexMap.elem$1).updated__O__O__Lscala_collection_Map(P, ScalaJS.bI(ix));
    invIndexMap = invIndexMap.updated__O__O__Lscala_collection_Map(ScalaJS.bI(ix), P);
    ix = (ix + 1);
    var Pdelta = new ScalaJS.c.scala_collection_mutable_HashMap().init___();
    delta.update__O__O__V(P, Pdelta);
    this.nfa__Lscala_util_automata_NondetWordAutom().labels__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, states$1, finals$1, rest$1, P$1, Pdelta$1) {
      return (function(label) {
        var Q = arg$outer.nfa__Lscala_util_automata_NondetWordAutom().next__Lscala_collection_immutable_BitSet__O__Lscala_collection_immutable_BitSet(P$1, label);
        Pdelta$1.update__O__O__V(label, Q);
        arg$outer.scala$util$automata$SubsetConstruction$$add$1__Lscala_collection_immutable_BitSet__Lscala_runtime_ObjectRef__Lscala_runtime_ObjectRef__Lscala_collection_mutable_Stack__V(Q, states$1, finals$1, rest$1);
        return ScalaJS.bV(undefined)
      })
    })(this, states, finals, rest, P, Pdelta)));
    var Pdef = this.nfa__Lscala_util_automata_NondetWordAutom().nextDefault__Lscala_collection_immutable_BitSet__Lscala_collection_immutable_BitSet(P);
    deftrans.elem$1 = ScalaJS.as.scala_collection_mutable_Map(deftrans.elem$1).updated__O__O__Lscala_collection_mutable_Map(P, Pdef);
    this.scala$util$automata$SubsetConstruction$$add$1__Lscala_collection_immutable_BitSet__Lscala_runtime_ObjectRef__Lscala_runtime_ObjectRef__Lscala_collection_mutable_Stack__V(Pdef, states, finals, rest)
  };
  var nstatesR = ScalaJS.as.scala_collection_immutable_Set(states.elem$1).size__I();
  var deltaR = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_mutable_Map.getArrayOf(), [nstatesR]);
  var defaultR = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [nstatesR]);
  var finalsR = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [nstatesR]);
  ScalaJS.as.scala_collection_immutable_Set(states.elem$1).foreach__Lscala_Function1__V(new ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2().init___Lscala_util_automata_SubsetConstruction__Lscala_runtime_ObjectRef__Lscala_collection_mutable_HashMap__Lscala_runtime_ObjectRef__ALscala_collection_mutable_Map__AI(this, indexMap, delta, deftrans, deltaR, defaultR));
  ScalaJS.as.scala_collection_mutable_Map(finals.elem$1).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(indexMap$1, finalsR$1) {
    return (function(x0$1) {
      var x1 = x0$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var k = ScalaJS.as.scala_collection_immutable_BitSet(x1.$$und1__O());
          var v = x1.$$und2$mcI$sp__I();
          finalsR$1.underlying[ScalaJS.uI(ScalaJS.as.scala_collection_Map(indexMap$1.elem$1).apply__O__O(k))] = v;
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bV(undefined)
    })
  })(indexMap, finalsR)));
  return new ScalaJS.c.scala_util_automata_SubsetConstruction$$anon$1().init___Lscala_util_automata_SubsetConstruction__I__ALscala_collection_mutable_Map__AI__AI(this, nstatesR, deltaR, defaultR, finalsR)
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.addFinal$1__p1__Lscala_collection_immutable_BitSet__Lscala_runtime_ObjectRef__V = (function(q, finals$1) {
  if (this.nfa__Lscala_util_automata_NondetWordAutom().containsFinal__Lscala_collection_immutable_BitSet__Z(q)) {
    finals$1.elem$1 = ScalaJS.as.scala_collection_mutable_Map(finals$1.elem$1).updated__O__O__Lscala_collection_mutable_Map(q, ScalaJS.bI(this.selectTag__Lscala_collection_immutable_BitSet__AI__I(q, this.nfa__Lscala_util_automata_NondetWordAutom().finals__AI())))
  }
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.scala$util$automata$SubsetConstruction$$add$1__Lscala_collection_immutable_BitSet__Lscala_runtime_ObjectRef__Lscala_runtime_ObjectRef__Lscala_collection_mutable_Stack__V = (function(Q, states$1, finals$1, rest$1) {
  if ((!ScalaJS.as.scala_collection_immutable_Set(states$1.elem$1).apply__O__Z(Q))) {
    states$1.elem$1 = ScalaJS.as.scala_collection_immutable_Set(ScalaJS.as.scala_collection_immutable_Set(states$1.elem$1).$$plus__O__Lscala_collection_Set(Q));
    rest$1.push__O__Lscala_collection_mutable_Stack(Q);
    this.addFinal$1__p1__Lscala_collection_immutable_BitSet__Lscala_runtime_ObjectRef__V(Q, finals$1)
  }
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.init___Lscala_util_automata_NondetWordAutom = (function(nfa) {
  this.nfa$1 = nfa;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.scala$util$automata$SubsetConstruction$$add$1__Lscala_collection_immutable_BitSet__Lscala_runtime_ObjectRef__Lscala_runtime_ObjectRef__Lscala_collection_mutable_Stack__ = (function(Q, states$1, finals$1, rest$1) {
  return ScalaJS.bV(this.scala$util$automata$SubsetConstruction$$add$1__Lscala_collection_immutable_BitSet__Lscala_runtime_ObjectRef__Lscala_runtime_ObjectRef__Lscala_collection_mutable_Stack__V(Q, states$1, finals$1, rest$1))
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.determinize__ = (function() {
  return this.determinize__Lscala_util_automata_DetWordAutom()
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.selectTag__Lscala_collection_immutable_BitSet__AI__ = (function(Q$2, finals) {
  return ScalaJS.bI(this.selectTag__Lscala_collection_immutable_BitSet__AI__I(Q$2, finals))
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.nfa__ = (function() {
  return this.nfa__Lscala_util_automata_NondetWordAutom()
});
/** @constructor */
ScalaJS.inheritable.scala_util_automata_SubsetConstruction = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_automata_SubsetConstruction.prototype = ScalaJS.c.scala_util_automata_SubsetConstruction.prototype;
ScalaJS.is.scala_util_automata_SubsetConstruction = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_automata_SubsetConstruction)))
});
ScalaJS.as.scala_util_automata_SubsetConstruction = (function(obj) {
  if ((ScalaJS.is.scala_util_automata_SubsetConstruction(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.automata.SubsetConstruction")
  }
});
ScalaJS.isArrayOf.scala_util_automata_SubsetConstruction = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_automata_SubsetConstruction)))
});
ScalaJS.asArrayOf.scala_util_automata_SubsetConstruction = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_automata_SubsetConstruction(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.automata.SubsetConstruction;", depth)
  }
});
ScalaJS.data.scala_util_automata_SubsetConstruction = new ScalaJS.ClassTypeData({
  scala_util_automata_SubsetConstruction: 0
}, false, "scala.util.automata.SubsetConstruction", ScalaJS.data.java_lang_Object, {
  scala_util_automata_SubsetConstruction: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_automata_SubsetConstruction.prototype.$classData = ScalaJS.data.scala_util_automata_SubsetConstruction;
//@ sourceMappingURL=SubsetConstruction.js.map
