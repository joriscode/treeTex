/** @constructor */
ScalaJS.c.scala_util_automata_WordBerrySethi = (function() {
  ScalaJS.c.scala_util_automata_BaseBerrySethi.call(this);
  this.labels$2 = null;
  this.labelAt$2 = null;
  this.deltaq$2 = null;
  this.defaultq$2 = null;
  this.initials$2 = null
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype = new ScalaJS.inheritable.scala_util_automata_BaseBerrySethi();
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.constructor = ScalaJS.c.scala_util_automata_WordBerrySethi;
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.labels__Lscala_collection_mutable_HashSet = (function() {
  return this.labels$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.labels$und$eq__Lscala_collection_mutable_HashSet__V = (function(x$1) {
  this.labels$2 = x$1
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.labelAt__Lscala_collection_immutable_Map = (function() {
  return this.labelAt$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.labelAt$und$eq__Lscala_collection_immutable_Map__V = (function(x$1) {
  this.labelAt$2 = x$1
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.deltaq__ALscala_collection_mutable_HashMap = (function() {
  return this.deltaq$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.deltaq$und$eq__ALscala_collection_mutable_HashMap__V = (function(x$1) {
  this.deltaq$2 = x$1
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.defaultq__ALscala_collection_immutable_List = (function() {
  return this.defaultq$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.defaultq$und$eq__ALscala_collection_immutable_List__V = (function(x$1) {
  this.defaultq$2 = x$1
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.initials__Lscala_collection_immutable_Set = (function() {
  return this.initials$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.initials$und$eq__Lscala_collection_immutable_Set__V = (function(x$1) {
  this.initials$2 = x$1
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.compFirst__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set = (function(r) {
  var x1 = r;
  if (ScalaJS.is.scala_util_regexp_WordExp$Letter(x1)) {
    var x2 = ScalaJS.as.scala_util_regexp_WordExp$Letter(x1);
    return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), [x2.pos__I()]))))
  };
  return ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compFirst__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set.call(this, r)
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.compLast__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set = (function(r) {
  var x1 = r;
  if (ScalaJS.is.scala_util_regexp_WordExp$Letter(x1)) {
    var x2 = ScalaJS.as.scala_util_regexp_WordExp$Letter(x1);
    return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), [x2.pos__I()]))))
  };
  return ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compLast__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set.call(this, r)
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set = (function(fol1, r) {
  var x1 = r;
  if (ScalaJS.is.scala_util_regexp_WordExp$Letter(x1)) {
    var x2 = ScalaJS.as.scala_util_regexp_WordExp$Letter(x1);
    this.follow__Lscala_collection_mutable_HashMap().update__O__O__V(ScalaJS.bI(x2.pos__I()), fol1);
    return ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), [x2.pos__I()]))))
  };
  if (ScalaJS.anyRefEqEq(this.lang__Lscala_util_regexp_WordExp().Eps__Lscala_util_regexp_Base$Eps$(), x1)) {
    return this.emptySet__Lscala_collection_immutable_Set()
  };
  return ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.compFollow1__Lscala_collection_immutable_Set__Lscala_util_regexp_Base$RegExp__Lscala_collection_immutable_Set.call(this, fol1, r)
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.seenLabel__Lscala_util_regexp_Base$RegExp__I__Lscala_util_regexp_WordExp$Label__V = (function(r, i, label) {
  this.labelAt$und$eq__Lscala_collection_immutable_Map__V(this.labelAt__Lscala_collection_immutable_Map().updated__O__O__Lscala_collection_immutable_Map(ScalaJS.bI(i), label));
  this.labels__Lscala_collection_mutable_HashSet().$$plus$eq__O__Lscala_collection_mutable_HashSet(label)
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.seenLabel__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_WordExp$Label__I = (function(r, label) {
  this.pos$und$eq__I__V((this.pos__I() + 1));
  this.seenLabel__Lscala_util_regexp_Base$RegExp__I__Lscala_util_regexp_WordExp$Label__V(r, this.pos__I(), label);
  return this.pos__I()
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.traverse__Lscala_util_regexp_Base$RegExp__V = (function(r) {
  var x1 = r;
  matchEnd5: {
    if (ScalaJS.is.scala_util_regexp_WordExp$Letter(x1)) {
      var x2 = ScalaJS.as.scala_util_regexp_WordExp$Letter(x1);
      var label = x2.a__Lscala_util_regexp_WordExp$Label();
      x2.pos$und$eq__I__V(this.seenLabel__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_WordExp$Label__I(r, label));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd5
    };
    if (ScalaJS.anyRefEqEq(this.lang__Lscala_util_regexp_WordExp().Eps__Lscala_util_regexp_Base$Eps$(), x1)) {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd5
    };
    ScalaJS.c.scala_util_automata_BaseBerrySethi.prototype.traverse__Lscala_util_regexp_Base$RegExp__V.call(this, r);
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    break matchEnd5
  }
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.makeTransition__I__I__Lscala_util_regexp_WordExp$Label__V = (function(src, dest, label) {
  var q = this.deltaq__ALscala_collection_mutable_HashMap().underlying[src];
  var jsx$3 = q;
  var jsx$2 = label;
  var x$1 = dest;
  var jsx$1 = ScalaJS.as.scala_collection_immutable_List(q.getOrElse__O__Lscala_Function0__O(label, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ScalaJS.modules.scala_collection_immutable_Nil()
    })
  })()))).$$colon$colon__O__Lscala_collection_immutable_List(ScalaJS.bI(x$1));
  jsx$3.update__O__O__V(jsx$2, jsx$1)
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.initialize__Lscala_collection_Seq__V = (function(subexpr) {
  this.labelAt$und$eq__Lscala_collection_immutable_Map__V(ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_collection_immutable_Map().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil())));
  this.follow$und$eq__Lscala_collection_mutable_HashMap__V(ScalaJS.as.scala_collection_mutable_HashMap(ScalaJS.modules.scala_collection_mutable_HashMap().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil())));
  this.labels$und$eq__Lscala_collection_mutable_HashSet__V(ScalaJS.as.scala_collection_mutable_HashSet(ScalaJS.modules.scala_collection_mutable_HashSet().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())));
  this.pos$und$eq__I__V(0);
  subexpr.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(r) {
      arg$outer.traverse__Lscala_util_regexp_Base$RegExp__V(r);
      return ScalaJS.bV(undefined)
    })
  })(this)));
  this.initials$und$eq__Lscala_collection_immutable_Set__V(ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_Predef().Set__Lscala_collection_immutable_Set$().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Int.getArrayOf(), [0])))))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.initializeAutom__V = (function() {
  this.finals$und$eq__Lscala_collection_immutable_Map__V(ScalaJS.modules.scala_collection_immutable_Map().empty__Lscala_collection_immutable_Map());
  this.deltaq$und$eq__ALscala_collection_mutable_HashMap__V(ScalaJS.newArrayObject(ScalaJS.data.scala_collection_mutable_HashMap.getArrayOf(), [this.pos__I()]));
  this.defaultq$und$eq__ALscala_collection_immutable_List__V(ScalaJS.newArrayObject(ScalaJS.data.scala_collection_immutable_List.getArrayOf(), [this.pos__I()]));
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.pos__I()).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(j) {
      j = ScalaJS.uI(j);
      arg$outer.deltaq__ALscala_collection_mutable_HashMap().underlying[j] = ScalaJS.as.scala_collection_mutable_HashMap(ScalaJS.modules.scala_collection_mutable_HashMap().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil()));
      arg$outer.defaultq__ALscala_collection_immutable_List().underlying[j] = ScalaJS.modules.scala_collection_immutable_Nil();
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.collectTransitions__V = (function() {
  ScalaJS.as.scala_collection_IterableLike(ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.pos__I()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(j) {
      j = ScalaJS.uI(j);
      var fol = ScalaJS.as.scala_collection_immutable_Set(arg$outer.follow__Lscala_collection_mutable_HashMap().apply__O__O(ScalaJS.bI(j)));
      return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(j), fol)
    })
  })(this)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).foreach__Lscala_Function1__V(new ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2().init___Lscala_util_automata_WordBerrySethi(this))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.automatonFrom__Lscala_util_regexp_Base$RegExp__I__Lscala_util_automata_NondetWordAutom = (function(pat, finalTag) {
  this.finalTag$und$eq__I__V(finalTag);
  var x1 = pat;
  if (ScalaJS.is.scala_util_regexp_Base$Sequ(x1)) {
    var x2 = ScalaJS.as.scala_util_regexp_Base$Sequ(x1);
    this.initialize__Lscala_collection_Seq__V(x2.rs__Lscala_collection_Seq());
    this.pos$und$eq__I__V((this.pos__I() + 1));
    this.compFollow__Lscala_collection_Seq__Lscala_collection_immutable_Set(x2.rs__Lscala_collection_Seq());
    this.initializeAutom__V();
    this.collectTransitions__V();
    if (x2.isNullable__Z()) {
      this.finals$und$eq__Lscala_collection_immutable_Map__V(this.finals__Lscala_collection_immutable_Map().updated__O__O__Lscala_collection_immutable_Map(ScalaJS.bI(0), ScalaJS.bI(finalTag)))
    };
    var delta1 = ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_collection_immutable_Map().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.deltaq__ALscala_collection_mutable_HashMap(), 1)).zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_Tuple2.getClassOf()))), 1)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$3) {
        return x$3.swap__Lscala_Tuple2()
      })
    })()), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_Tuple2.getClassOf()))), 1))));
    var finalsArr = ScalaJS.asArrayOf.scala_Int(ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.pos__I()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(k) {
        k = ScalaJS.uI(k);
        return ScalaJS.bI(ScalaJS.uI(arg$outer.finals__Lscala_collection_immutable_Map().getOrElse__O__Lscala_Function0__O(ScalaJS.bI(k), new ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$1$$anonfun$apply$mcII$sp$1().init___Lscala_util_automata_WordBerrySethi$$anonfun$1(this))))
      })
    })(this)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag()), 1);
    var initialsArr = ScalaJS.asArrayOf.scala_Int(this.initials__Lscala_collection_immutable_Set().toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag()), 1);
    var deltaArr = ScalaJS.asArrayOf.scala_collection_mutable_Map(ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.pos__I()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(delta1$1) {
      return (function(x) {
        x = ScalaJS.uI(x);
        return ScalaJS.as.scala_collection_mutable_HashMap(ScalaJS.modules.scala_collection_mutable_HashMap().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.as.scala_collection_Seq(ScalaJS.as.scala_collection_MapLike(delta1$1.apply__O__O(ScalaJS.bI(x))).toSeq__Lscala_collection_Seq().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$3$$anonfun$apply$2().init___Lscala_util_automata_WordBerrySethi$$anonfun$3(this), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))))
      })
    })(delta1)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_mutable_Map.getClassOf())), 1);
    var defaultArr = ScalaJS.asArrayOf.scala_collection_immutable_BitSet(ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.pos__I()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(k) {
        k = ScalaJS.uI(k);
        return ScalaJS.as.scala_collection_immutable_BitSet(ScalaJS.modules.scala_collection_immutable_BitSet().apply__Lscala_collection_Seq__Lscala_collection_BitSet(arg$outer.defaultq__ALscala_collection_immutable_List().underlying[k]))
      })
    })(this)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_collection_immutable_BitSet.getClassOf())), 1);
    return new ScalaJS.c.scala_util_automata_WordBerrySethi$$anon$1().init___Lscala_util_automata_WordBerrySethi__AI__AI__ALscala_collection_mutable_Map__ALscala_collection_immutable_BitSet(this, finalsArr, initialsArr, deltaArr, defaultArr)
  };
  return this.automatonFrom__Lscala_util_regexp_Base$RegExp__I__Lscala_util_automata_NondetWordAutom(this.lang__Lscala_util_regexp_WordExp().Sequ__Lscala_util_regexp_Base$Sequ$().apply__Lscala_collection_Seq__Lscala_util_regexp_Base$RegExp(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_util_regexp_Base$RegExp.getArrayOf(), [x1]), 1))), finalTag)
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.automatonFrom__Lscala_util_regexp_Base$RegExp__I__ = (function(pat, finalTag) {
  return this.automatonFrom__Lscala_util_regexp_Base$RegExp__I__Lscala_util_automata_NondetWordAutom(pat, finalTag)
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.collectTransitions__ = (function() {
  return ScalaJS.bV(this.collectTransitions__V())
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.initializeAutom__ = (function() {
  return ScalaJS.bV(this.initializeAutom__V())
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.initialize__Lscala_collection_Seq__ = (function(subexpr) {
  return ScalaJS.bV(this.initialize__Lscala_collection_Seq__V(subexpr))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.makeTransition__I__I__Lscala_util_regexp_WordExp$Label__ = (function(src, dest, label) {
  return ScalaJS.bV(this.makeTransition__I__I__Lscala_util_regexp_WordExp$Label__V(src, dest, label))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.seenLabel__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_WordExp$Label__ = (function(r, label$2) {
  return ScalaJS.bI(this.seenLabel__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_WordExp$Label__I(r, label$2))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.seenLabel__Lscala_util_regexp_Base$RegExp__I__Lscala_util_regexp_WordExp$Label__ = (function(r$2, i, label$3) {
  return ScalaJS.bV(this.seenLabel__Lscala_util_regexp_Base$RegExp__I__Lscala_util_regexp_WordExp$Label__V(r$2, i, label$3))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.initials$und$eq__Lscala_collection_immutable_Set__ = (function(x$1) {
  return ScalaJS.bV(this.initials$und$eq__Lscala_collection_immutable_Set__V(x$1))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.initials__ = (function() {
  return this.initials__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.defaultq$und$eq__ALscala_collection_immutable_List__ = (function(x$1$2) {
  return ScalaJS.bV(this.defaultq$und$eq__ALscala_collection_immutable_List__V(x$1$2))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.defaultq__ = (function() {
  return this.defaultq__ALscala_collection_immutable_List()
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.deltaq$und$eq__ALscala_collection_mutable_HashMap__ = (function(x$1$3) {
  return ScalaJS.bV(this.deltaq$und$eq__ALscala_collection_mutable_HashMap__V(x$1$3))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.deltaq__ = (function() {
  return this.deltaq__ALscala_collection_mutable_HashMap()
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.labelAt$und$eq__Lscala_collection_immutable_Map__ = (function(x$1$4) {
  return ScalaJS.bV(this.labelAt$und$eq__Lscala_collection_immutable_Map__V(x$1$4))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.labelAt__ = (function() {
  return this.labelAt__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.labels$und$eq__Lscala_collection_mutable_HashSet__ = (function(x$1$5) {
  return ScalaJS.bV(this.labels$und$eq__Lscala_collection_mutable_HashSet__V(x$1$5))
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.labels__ = (function() {
  return this.labels__Lscala_collection_mutable_HashSet()
});
/** @constructor */
ScalaJS.inheritable.scala_util_automata_WordBerrySethi = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_automata_WordBerrySethi.prototype = ScalaJS.c.scala_util_automata_WordBerrySethi.prototype;
ScalaJS.is.scala_util_automata_WordBerrySethi = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_automata_WordBerrySethi)))
});
ScalaJS.as.scala_util_automata_WordBerrySethi = (function(obj) {
  if ((ScalaJS.is.scala_util_automata_WordBerrySethi(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.automata.WordBerrySethi")
  }
});
ScalaJS.isArrayOf.scala_util_automata_WordBerrySethi = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_automata_WordBerrySethi)))
});
ScalaJS.asArrayOf.scala_util_automata_WordBerrySethi = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_automata_WordBerrySethi(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.automata.WordBerrySethi;", depth)
  }
});
ScalaJS.data.scala_util_automata_WordBerrySethi = new ScalaJS.ClassTypeData({
  scala_util_automata_WordBerrySethi: 0
}, false, "scala.util.automata.WordBerrySethi", ScalaJS.data.scala_util_automata_BaseBerrySethi, {
  scala_util_automata_WordBerrySethi: 1,
  scala_util_automata_BaseBerrySethi: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_automata_WordBerrySethi.prototype.$classData = ScalaJS.data.scala_util_automata_WordBerrySethi;
//@ sourceMappingURL=WordBerrySethi.js.map
