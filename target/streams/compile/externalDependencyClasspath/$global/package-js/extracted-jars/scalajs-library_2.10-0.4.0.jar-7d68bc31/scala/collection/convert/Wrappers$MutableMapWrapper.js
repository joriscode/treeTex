/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper = (function() {
  ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.call(this);
  this.underlying$3 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype = new ScalaJS.inheritable.scala_collection_convert_Wrappers$MapWrapper();
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.underlying__Lscala_collection_mutable_Map = (function() {
  return this.underlying$3
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.put__O__O__O = (function(k, v) {
  var x1 = this.underlying__Lscala_collection_mutable_Map().put__O__O__Lscala_Option(k, v);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var v1 = x2.x__O();
    return v1
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return null
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.remove__O__O = (function(k) {
  try {
    var x1 = this.underlying__Lscala_collection_mutable_Map().remove__O__Lscala_Option(k);
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
      return null
    };
    if (ScalaJS.is.scala_Some(x1)) {
      var x2 = ScalaJS.as.scala_Some(x1);
      var v = x2.x__O();
      return v
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      var ex = $jsexc$;
      return null
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.clear__V = (function() {
  this.underlying__Lscala_collection_mutable_Map().clear__V()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.copy__Lscala_collection_mutable_Map__Lscala_collection_convert_Wrappers$MutableMapWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Map(this.scala$collection$convert$Wrappers$MutableMapWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.copy$default$1__Lscala_collection_mutable_Map = (function() {
  return this.underlying__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.productPrefix__T = (function() {
  return "MutableMapWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Lscala_collection_mutable_Map();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_convert_Wrappers$MutableMapWrapper(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.scala$collection$convert$Wrappers$MutableMapWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Map = (function($$outer, underlying) {
  this.underlying$3 = underlying;
  ScalaJS.c.scala_collection_convert_Wrappers$MapWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_Map.call(this, $$outer, underlying);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.scala$collection$convert$Wrappers$MutableMapWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$MutableMapWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.copy__Lscala_collection_mutable_Map__ = (function(underlying) {
  return this.copy__Lscala_collection_mutable_Map__Lscala_collection_convert_Wrappers$MutableMapWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_mutable_Map()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableMapWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableMapWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MutableMapWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MutableMapWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MutableMapWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MutableMapWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MutableMapWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableMapWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MutableMapWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MutableMapWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableMapWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MutableMapWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MutableMapWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MutableMapWrapper: 0
}, false, "scala.collection.convert.Wrappers$MutableMapWrapper", ScalaJS.data.scala_collection_convert_Wrappers$MapWrapper, {
  scala_collection_convert_Wrappers$MutableMapWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_convert_Wrappers$MapWrapper: 1,
  java_util_AbstractMap: 1,
  java_util_Map: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableMapWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MutableMapWrapper;
//@ sourceMappingURL=Wrappers$MutableMapWrapper.js.map
