/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper = (function() {
  ScalaJS.c.java_util_Dictionary.call(this);
  this.underlying$2 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype = new ScalaJS.inheritable.java_util_Dictionary();
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.underlying__Lscala_collection_mutable_Map = (function() {
  return this.underlying$2
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.size__I = (function() {
  return this.underlying__Lscala_collection_mutable_Map().size__I()
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.isEmpty__Z = (function() {
  return this.underlying__Lscala_collection_mutable_Map().isEmpty__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.keys__Ljava_util_Enumeration = (function() {
  return ScalaJS.modules.scala_collection_convert_WrapAsJava().asJavaEnumeration__Lscala_collection_Iterator__Ljava_util_Enumeration(this.underlying__Lscala_collection_mutable_Map().keysIterator__Lscala_collection_Iterator())
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.elements__Ljava_util_Enumeration = (function() {
  return ScalaJS.modules.scala_collection_convert_WrapAsJava().asJavaEnumeration__Lscala_collection_Iterator__Ljava_util_Enumeration(this.underlying__Lscala_collection_mutable_Map().valuesIterator__Lscala_collection_Iterator())
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.get__O__O = (function(key) {
  try {
    var x1 = this.underlying__Lscala_collection_mutable_Map().get__O__Lscala_Option(key);
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
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.put__O__O__O = (function(key, value) {
  var x1 = this.underlying__Lscala_collection_mutable_Map().put__O__O__Lscala_Option(key, value);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var v = x2.x__O();
    return v
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return null
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.remove__O__O = (function(key) {
  try {
    var x1 = this.underlying__Lscala_collection_mutable_Map().remove__O__Lscala_Option(key);
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
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.copy__Lscala_collection_mutable_Map__Lscala_collection_convert_Wrappers$DictionaryWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Map(this.scala$collection$convert$Wrappers$DictionaryWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.copy$default$1__Lscala_collection_mutable_Map = (function() {
  return this.underlying__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.productPrefix__T = (function() {
  return "DictionaryWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.productElement__I__O = (function(x$1) {
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
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_convert_Wrappers$DictionaryWrapper(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_collection_convert_Wrappers$DictionaryWrapper(x1) && (ScalaJS.as.scala_collection_convert_Wrappers$DictionaryWrapper(x1).scala$collection$convert$Wrappers$DictionaryWrapper$$$outer__Lscala_collection_convert_Wrappers() === this.scala$collection$convert$Wrappers$DictionaryWrapper$$$outer__Lscala_collection_convert_Wrappers()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var DictionaryWrapper$1 = ScalaJS.as.scala_collection_convert_Wrappers$DictionaryWrapper(x$1);
      return (ScalaJS.anyRefEqEq(this.underlying__Lscala_collection_mutable_Map(), DictionaryWrapper$1.underlying__Lscala_collection_mutable_Map()) && DictionaryWrapper$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.scala$collection$convert$Wrappers$DictionaryWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Map = (function($$outer, underlying) {
  this.underlying$2 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_util_Dictionary.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.scala$collection$convert$Wrappers$DictionaryWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$DictionaryWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.copy__Lscala_collection_mutable_Map__ = (function(underlying) {
  return this.copy__Lscala_collection_mutable_Map__Lscala_collection_convert_Wrappers$DictionaryWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_mutable_Map()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$DictionaryWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$DictionaryWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$DictionaryWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$DictionaryWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$DictionaryWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$DictionaryWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$DictionaryWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$DictionaryWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$DictionaryWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$DictionaryWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$DictionaryWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$DictionaryWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$DictionaryWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$DictionaryWrapper: 0
}, false, "scala.collection.convert.Wrappers$DictionaryWrapper", ScalaJS.data.java_util_Dictionary, {
  scala_collection_convert_Wrappers$DictionaryWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_util_Dictionary: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$DictionaryWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$DictionaryWrapper;
//@ sourceMappingURL=Wrappers$DictionaryWrapper.js.map
