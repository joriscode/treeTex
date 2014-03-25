/** @constructor */
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1$mcVI$sp.call(this);
  this.$$outer$3 = null
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1$mcVI$sp();
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1;
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype.apply__I__V = (function(i) {
  this.apply$mcVI$sp__I__V(i)
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype.apply$mcVI$sp__I__V = (function(i) {
  if (((!ScalaJS.anyRefEqEq(this.$$outer$3.table__AO().underlying[i], null)) && (!this.$$outer$3.containsEntry__O__Z(this.$$outer$3.table__AO().underlying[i])))) {
    ScalaJS.modules.scala_Predef().assert__Z__Lscala_Function0__V(false, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, i$1) {
      return (function() {
        return (((("" + (ScalaJS.bI(i$1) + " ")) + arg$outer.scala$collection$mutable$FlatHashTable$$anonfun$$$outer__Lscala_collection_mutable_FlatHashTable().table__AO().underlying[i$1]) + " ") + ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(arg$outer.scala$collection$mutable$FlatHashTable$$anonfun$$$outer__Lscala_collection_mutable_FlatHashTable().table__AO()).mkString__T())
      })
    })(this, i)))
  }
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype.scala$collection$mutable$FlatHashTable$$anonfun$$$outer__Lscala_collection_mutable_FlatHashTable = (function() {
  return this.$$outer$3
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype.apply__O__O = (function(v1) {
  this.apply__I__V(ScalaJS.uI(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype.init___Lscala_collection_mutable_FlatHashTable = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$3 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction1$mcVI$sp.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype.scala$collection$mutable$FlatHashTable$$anonfun$$$outer__ = (function() {
  return this.scala$collection$mutable$FlatHashTable$$anonfun$$$outer__Lscala_collection_mutable_FlatHashTable()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype = ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype;
ScalaJS.is.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1)))
});
ScalaJS.as.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.FlatHashTable$$anonfun$checkConsistent$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.FlatHashTable$$anonfun$checkConsistent$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1: 0
}, false, "scala.collection.mutable.FlatHashTable$$anonfun$checkConsistent$1", ScalaJS.data.scala_runtime_AbstractFunction1$mcVI$sp, {
  scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1$mcVI$sp: 1,
  scala_Function1$mcVI$sp: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_FlatHashTable$$anonfun$checkConsistent$1;
//@ sourceMappingURL=FlatHashTable$$anonfun$checkConsistent$1.js.map
