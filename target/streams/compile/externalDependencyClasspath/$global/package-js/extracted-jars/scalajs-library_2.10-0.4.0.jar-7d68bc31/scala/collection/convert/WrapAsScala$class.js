ScalaJS.impls.scala_collection_convert_WrapAsScala$class__asScalaIterator__Lscala_collection_convert_WrapAsScala__Ljava_util_Iterator__Lscala_collection_Iterator = (function($$this, it) {
  var x1 = it;
  if (ScalaJS.is.scala_collection_convert_Wrappers$IteratorWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$IteratorWrapper(x1);
    var wrapped = x2.underlying__Lscala_collection_Iterator();
    return wrapped
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JIteratorWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Iterator(ScalaJS.modules.scala_collection_convert_Wrappers(), it)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__enumerationAsScalaIterator__Lscala_collection_convert_WrapAsScala__Ljava_util_Enumeration__Lscala_collection_Iterator = (function($$this, i) {
  var x1 = i;
  if (ScalaJS.is.scala_collection_convert_Wrappers$IteratorWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$IteratorWrapper(x1);
    var wrapped = x2.underlying__Lscala_collection_Iterator();
    return wrapped
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Enumeration(ScalaJS.modules.scala_collection_convert_Wrappers(), i)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__iterableAsScalaIterable__Lscala_collection_convert_WrapAsScala__Ljava_lang_Iterable__Lscala_collection_Iterable = (function($$this, i) {
  var x1 = i;
  if (ScalaJS.is.scala_collection_convert_Wrappers$IterableWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$IterableWrapper(x1);
    var wrapped = x2.underlying__Lscala_collection_Iterable();
    return wrapped
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper().init___Lscala_collection_convert_Wrappers__Ljava_lang_Iterable(ScalaJS.modules.scala_collection_convert_Wrappers(), i)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__collectionAsScalaIterable__Lscala_collection_convert_WrapAsScala__Ljava_util_Collection__Lscala_collection_Iterable = (function($$this, i) {
  var x1 = i;
  if (ScalaJS.is.scala_collection_convert_Wrappers$IterableWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$IterableWrapper(x1);
    var wrapped = x2.underlying__Lscala_collection_Iterable();
    return wrapped
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Collection(ScalaJS.modules.scala_collection_convert_Wrappers(), i)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__asScalaBuffer__Lscala_collection_convert_WrapAsScala__Ljava_util_List__Lscala_collection_mutable_Buffer = (function($$this, l) {
  var x1 = l;
  if (ScalaJS.is.scala_collection_convert_Wrappers$MutableBufferWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$MutableBufferWrapper(x1);
    var wrapped = x2.underlying__Lscala_collection_mutable_Buffer();
    return wrapped
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JListWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_List(ScalaJS.modules.scala_collection_convert_Wrappers(), l)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__asScalaSet__Lscala_collection_convert_WrapAsScala__Ljava_util_Set__Lscala_collection_mutable_Set = (function($$this, s) {
  var x1 = s;
  if (ScalaJS.is.scala_collection_convert_Wrappers$MutableSetWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$MutableSetWrapper(x1);
    var wrapped = x2.underlying__Lscala_collection_mutable_Set();
    return wrapped
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JSetWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Set(ScalaJS.modules.scala_collection_convert_Wrappers(), s)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__mapAsScalaMap__Lscala_collection_convert_WrapAsScala__Ljava_util_Map__Lscala_collection_mutable_Map = (function($$this, m) {
  var x1 = m;
  if (ScalaJS.is.scala_collection_convert_Wrappers$MutableMapWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$MutableMapWrapper(x1);
    var wrapped = x2.underlying__Lscala_collection_mutable_Map();
    return wrapped
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Map(ScalaJS.modules.scala_collection_convert_Wrappers(), m)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__asScalaConcurrentMap__Lscala_collection_convert_WrapAsScala__Ljava_util_concurrent_ConcurrentMap__Lscala_collection_mutable_ConcurrentMap = (function($$this, m) {
  var x1 = m;
  if (ScalaJS.is.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$ConcurrentMapDeprecatedWrapper(x1);
    return x2.underlying__Lscala_collection_mutable_ConcurrentMap()
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapDeprecatedWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_concurrent_ConcurrentMap(ScalaJS.modules.scala_collection_convert_Wrappers(), m)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__mapAsScalaConcurrentMap__Lscala_collection_convert_WrapAsScala__Ljava_util_concurrent_ConcurrentMap__Lscala_collection_concurrent_Map = (function($$this, m) {
  var x1 = m;
  if (ScalaJS.is.scala_collection_convert_Wrappers$ConcurrentMapWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$ConcurrentMapWrapper(x1);
    return x2.underlying__Lscala_collection_concurrent_Map()
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_concurrent_ConcurrentMap(ScalaJS.modules.scala_collection_convert_Wrappers(), m)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__dictionaryAsScalaMap__Lscala_collection_convert_WrapAsScala__Ljava_util_Dictionary__Lscala_collection_mutable_Map = (function($$this, p) {
  var x1 = p;
  if (ScalaJS.is.scala_collection_convert_Wrappers$DictionaryWrapper(x1)) {
    var x2 = ScalaJS.as.scala_collection_convert_Wrappers$DictionaryWrapper(x1);
    var wrapped = x2.underlying__Lscala_collection_mutable_Map();
    return wrapped
  };
  return new ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Dictionary(ScalaJS.modules.scala_collection_convert_Wrappers(), p)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__propertiesAsScalaMap__Lscala_collection_convert_WrapAsScala__Ljava_util_Properties__Lscala_collection_mutable_Map = (function($$this, p) {
  var x1 = p;
  return new ScalaJS.c.scala_collection_convert_Wrappers$JPropertiesWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Properties(ScalaJS.modules.scala_collection_convert_Wrappers(), p)
});
ScalaJS.impls.scala_collection_convert_WrapAsScala$class__$init$__Lscala_collection_convert_WrapAsScala__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=WrapAsScala$class.js.map
