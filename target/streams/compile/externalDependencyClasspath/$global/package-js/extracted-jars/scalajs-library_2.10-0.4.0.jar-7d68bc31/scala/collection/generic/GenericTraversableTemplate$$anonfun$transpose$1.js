/** @constructor */
ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.headSize$1$f = 0;
  this.bs$1$f = null;
  this.asTraversable$2$2 = null
});
ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype.constructor = ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1;
ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype.apply__O__V = (function(xs) {
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  ScalaJS.as.scala_collection_GenTraversableOnce(this.asTraversable$2$2.apply__O__O(xs)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, i$1) {
    return (function(x) {
      if ((i$1.elem$1 >= arg$outer.headSize$1$f)) {
        ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__fail$1__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Nothing(arg$outer.scala$collection$generic$GenericTraversableTemplate$$anonfun$$$outer__Lscala_collection_generic_GenericTraversableTemplate())
      };
      ScalaJS.as.scala_collection_mutable_Builder(arg$outer.bs$1$f.apply__I__O(i$1.elem$1)).$$plus$eq__O__Lscala_collection_mutable_Builder(x);
      i$1.elem$1 = (i$1.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(this, i)));
  if ((i.elem$1 !== this.headSize$1$f)) {
    ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__fail$1__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Nothing(this.$$outer$2)
  }
});
ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype.scala$collection$generic$GenericTraversableTemplate$$anonfun$$$outer__Lscala_collection_generic_GenericTraversableTemplate = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__V(v1);
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype.init___Lscala_collection_generic_GenericTraversableTemplate__I__Lscala_collection_IndexedSeq__Lscala_Function1 = (function($$outer, headSize$1, bs$1, asTraversable$2) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.headSize$1$f = headSize$1;
  this.bs$1$f = bs$1;
  this.asTraversable$2$2 = asTraversable$2;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype.scala$collection$generic$GenericTraversableTemplate$$anonfun$$$outer__ = (function() {
  return this.scala$collection$generic$GenericTraversableTemplate$$anonfun$$$outer__Lscala_collection_generic_GenericTraversableTemplate()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype = ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype;
ScalaJS.is.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1)))
});
ScalaJS.as.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenericTraversableTemplate$$anonfun$transpose$1")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenericTraversableTemplate$$anonfun$transpose$1;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1 = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1: 0
}, false, "scala.collection.generic.GenericTraversableTemplate$$anonfun$transpose$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1.prototype.$classData = ScalaJS.data.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1;
//@ sourceMappingURL=GenericTraversableTemplate$$anonfun$transpose$1.js.map
