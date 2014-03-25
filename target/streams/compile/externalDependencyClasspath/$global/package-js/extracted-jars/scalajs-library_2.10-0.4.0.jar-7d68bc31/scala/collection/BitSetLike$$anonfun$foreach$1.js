/** @constructor */
ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1$mcVI$sp.call(this);
  this.$$outer$3 = null;
  this.f$1$f = null
});
ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1$mcVI$sp();
ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1.prototype.constructor = ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1;
ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1.prototype.apply__I__V = (function(i) {
  this.apply$mcVI$sp__I__V(i)
});
ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1.prototype.apply$mcVI$sp__I__V = (function(i) {
  var w = this.$$outer$3.word__I__J(i);
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I((i * ScalaJS.modules.scala_collection_BitSetLike().scala$collection$BitSetLike$$WordLength__I())), ((i + 1) * ScalaJS.modules.scala_collection_BitSetLike().scala$collection$BitSetLike$$WordLength__I())).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, w$1) {
    return (function(j) {
      j = ScalaJS.uI(j);
      if (w$1.$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0).$$less$less__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(j))).notEquals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0))) {
        return arg$outer.f$1$f.apply__O__O(ScalaJS.bI(j))
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(this, w)))
});
ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1.prototype.apply__O__O = (function(v1) {
  this.apply__I__V(ScalaJS.uI(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1.prototype.init___Lscala_collection_BitSetLike__Lscala_Function1 = (function($$outer, f$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  this.f$1$f = f$1;
  ScalaJS.c.scala_runtime_AbstractFunction1$mcVI$sp.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_BitSetLike$$anonfun$foreach$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_BitSetLike$$anonfun$foreach$1.prototype = ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1.prototype;
ScalaJS.is.scala_collection_BitSetLike$$anonfun$foreach$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_BitSetLike$$anonfun$foreach$1)))
});
ScalaJS.as.scala_collection_BitSetLike$$anonfun$foreach$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_BitSetLike$$anonfun$foreach$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.BitSetLike$$anonfun$foreach$1")
  }
});
ScalaJS.isArrayOf.scala_collection_BitSetLike$$anonfun$foreach$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_BitSetLike$$anonfun$foreach$1)))
});
ScalaJS.asArrayOf.scala_collection_BitSetLike$$anonfun$foreach$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_BitSetLike$$anonfun$foreach$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.BitSetLike$$anonfun$foreach$1;", depth)
  }
});
ScalaJS.data.scala_collection_BitSetLike$$anonfun$foreach$1 = new ScalaJS.ClassTypeData({
  scala_collection_BitSetLike$$anonfun$foreach$1: 0
}, false, "scala.collection.BitSetLike$$anonfun$foreach$1", ScalaJS.data.scala_runtime_AbstractFunction1$mcVI$sp, {
  scala_collection_BitSetLike$$anonfun$foreach$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1$mcVI$sp: 1,
  scala_Function1$mcVI$sp: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1.prototype.$classData = ScalaJS.data.scala_collection_BitSetLike$$anonfun$foreach$1;
//@ sourceMappingURL=BitSetLike$$anonfun$foreach$1.js.map
